import { useRouter } from 'next/router';
export default function CliensProjectPage() {
  const Router = useRouter();
  console.log(`🔎 | CliensProjectPage | query:`, Router.query);

  function loadProjectHandler() {
    //...load data
    Router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: Router.query.id, clientprojectid: 'projecttest' },
    });
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load project Test</button>
    </div>
  );
}
