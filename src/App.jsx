import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './useFetch';

export default function App() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  console.log(data);

  return (
    <>
      {loading && <p>Loading...</p>}
      <main className="container py-4">
        <h1>Posts</h1>
        {error && <p>An error occured while fetching posts </p>}
        {data && data.length > 0 ? (
          data.map((post) => (
            <div className="card mt-2">
              <div className="card-body">
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Posts not found</p>
        )}
      </main>
    </>
  );
}
