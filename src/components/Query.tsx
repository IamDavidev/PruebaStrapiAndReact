import { useQuery } from '@apollo/react-hooks';
import { GetPosts } from '../services/QueryPosts';
import GetPots from './GetPots';



const Query = () => {
  
    const { data, loading, error } = useQuery(GetPosts);
  if (loading) return console.log('loading');
  if (error) return console.log('error');
  console.log(data);

  return (
    <>
      <h1>Query</h1>
    </>
  );
};



export default Query;