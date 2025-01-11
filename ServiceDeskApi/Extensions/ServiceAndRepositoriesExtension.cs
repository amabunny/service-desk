using System.Reflection;
using Microsoft.Extensions.DependencyInjection;

namespace ServiceDeskApi.Extensions;

public static class ServiceAndRepositoriesExtension
{
    public static void RegisterServicesAndRepositories(this IServiceCollection serviceCollection, Assembly assembly)
    {
        var repositoryTypes = assembly.GetTypes()
            .Where(t => t is { IsClass: true, IsAbstract: false } && t.Name.EndsWith("Repository"))
            .ToList();

        foreach (var repositoryType in repositoryTypes)
        {
            var repositoryInterfaceType = repositoryType
                .GetInterfaces()
                .FirstOrDefault(i => i.Name == 'I' + repositoryType.Name);

            if (repositoryInterfaceType != null)
            {
                serviceCollection.AddScoped(repositoryInterfaceType, repositoryType);
            }
        }

        var serviceTypes = assembly.GetTypes()
            .Where(t => t is { IsClass: true, IsAbstract: false } && t.Name.EndsWith("Service"))
            .ToList();

        foreach (var serviceType in serviceTypes)
        {
            var serviceInterfaceType = serviceType
                .GetInterfaces()
                .FirstOrDefault(i => i.Name == 'I' + serviceType.Name);

            if (serviceInterfaceType != null)
            {
                serviceCollection.AddScoped(serviceInterfaceType, serviceType);
            }
        }
    }
}
