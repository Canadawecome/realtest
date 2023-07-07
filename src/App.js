import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            id: 'bbe141f2-4cdd-4fa1-9d2c-644726f4c445',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=bbe141f2-4cdd-4fa1-9d2c-644726f4c445&groupId=090cfcf9-c81b-4a61-9e17-11f663f35ff6&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDZmMWI4OWYtMDdlOC00NjRmLWI0MDgtZWMxYjQ1NzAzZjMxLyIsImlhdCI6MTY4ODY5MzE4OCwibmJmIjoxNjg4NjkzMTg4LCJleHAiOjE2ODg2OTc0MzMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFqdjNzbEFua1hVNlNxaXd5aHNKZHlFSWd0ajNPRTIzKytjSkU1S00xZVJybUY2S3VibnJ3QlVmblVFMnVpZy95IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjExOC43MC4xMzMuMjciLCJuYW1lIjoiTmd1eWVuIFRhdCBWdW9uZyAyMDIwNjMxMyIsIm9pZCI6ImJiZjhjMTFmLWI2ZmYtNGZmNC04MDBkLTM1YjIxYmM5MTQ4ZiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yNzQ2MjUxMDA3LTEzMjQ1OTUyMDYtNzgxNjU0MzUxLTc5NDgxIiwicHVpZCI6IjEwMDMyMDAwRUExODYzMzUiLCJyaCI6IjAuQVhJQW43anhCdWdIVDBhMENPd2JSWEFfTVFrQUFBQUFBQUFBd0FBQUFBQUFBQUJ5QUVJLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImE1YUVIVlJPdEZHeHVMNzFaRHA4X1lieXZ1aGt3dkh3MXowQmRfeFBHN3ciLCJ0aWQiOiIwNmYxYjg5Zi0wN2U4LTQ2NGYtYjQwOC1lYzFiNDU3MDNmMzEiLCJ1bmlxdWVfbmFtZSI6IlZ1b25nLk5UMjA2MzEzQHNpcy5odXN0LmVkdS52biIsInVwbiI6IlZ1b25nLk5UMjA2MzEzQHNpcy5odXN0LmVkdS52biIsInV0aSI6ImFQUHhFcUdLWEVPODRicWV3NGM4QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.fFMmdfkQoDFSO9jWQDknHZvZonGZ8K0Hje6-xDSzN0gCnGZYqPxRw9WsiNKADTIfh0979RBGGVoRYjJR0G5MeQGJGEVy7s9NEerz-KBjkieFnC_oOTTXau36XtBwb5teo8NOsKakkkgZjj5Wyl2kO2TZZy0_P-PCwQh0xC6RJaG9FJSVuCMHQXgK5SMaItoXZgqWKSu0-9tzkl4ZXBeLvi8kOdJQyavQJhmXpJSzFO7TsuYsEa-NsnLFMXDqODdqfHHM3syBgdXyRV2kz-3Wp6r_kVFDIfTw8jH6oWxWlK6pFXtnLlT2QPxDpcfBXnPEqADs64KbAHzbkExTRYvz1A', tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                }
              },

            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }],
              ['visualClicked', () => console.log('visual clicked')],
              ['pageChanged', (event) => console.log(event)],
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
