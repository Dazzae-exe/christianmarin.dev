import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/lib/supabase/endpoints/postQuery';
import { getProjects } from '@/lib/supabase/endpoints/projectQuery';

const usePosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
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

export { usePosts, useProjects };