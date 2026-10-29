import { useQuery } from '@tanstack/react-query';
import { getProject, getProjects } from '@/services/projects/projectQuery';

const useProjects = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: getProjects,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

const useProject = (id: string) => {
    return useQuery({
        queryKey: ['project', id],
        queryFn: () => getProject(id),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

export { useProjects, useProject };