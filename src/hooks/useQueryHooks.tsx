import { useQuery } from '@tanstack/react-query';
import { getPost, getPosts } from '@/services/posts/postQuery';
import { getProject, getProjects } from '@/services/projects/projectQuery';

const usePosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

const usePost = (id: string) => {
    return useQuery({
        queryKey: ['post', id],
        queryFn: () => getPost(id),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

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

export { usePosts, usePost, useProjects, useProject };