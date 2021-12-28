import { useQuery } from '@apollo/client';
import { GetPosts } from './QueryPosts';

export const ListPost = () => {
  const { data, loading, error } = useQuery(GetPosts);

  loading && 'loading...';
  error && `error: ${error}`;
  data && console.log(data);
};
