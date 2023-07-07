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
            id: 'ee49ed21-cb05-4a4a-837d-f429ea357ea4',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=ee49ed21-cb05-4a4a-837d-f429ea357ea4&groupId=090cfcf9-c81b-4a61-9e17-11f663f35ff6&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDZmMWI4OWYtMDdlOC00NjRmLWI0MDgtZWMxYjQ1NzAzZjMxLyIsImlhdCI6MTY4ODcwNDI1MiwibmJmIjoxNjg4NzA0MjUyLCJleHAiOjE2ODg3MDkxNDksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFYMk5zN3NyOHoxYnZ6ZDhiOGJDUDRZa2tIZUJyeWY2S3ZkRHhySjZLby9oRU5hT01rdGhkRmlFcWpjL2VUdGtsIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjU4LjE4Ny43Ny42OCIsIm5hbWUiOiJOZ3V5ZW4gVGF0IFZ1b25nIDIwMjA2MzEzIiwib2lkIjoiYmJmOGMxMWYtYjZmZi00ZmY0LTgwMGQtMzViMjFiYzkxNDhmIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTI3NDYyNTEwMDctMTMyNDU5NTIwNi03ODE2NTQzNTEtNzk0ODEiLCJwdWlkIjoiMTAwMzIwMDBFQTE4NjMzNSIsInJoIjoiMC5BWElBbjdqeEJ1Z0hUMGEwQ093YlJYQV9NUWtBQUFBQUFBQUF3QUFBQUFBQUFBQnlBRUkuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiYTVhRUhWUk90Rkd4dUw3MVpEcDhfWWJ5dnVoa3d2SHcxejBCZF94UEc3dyIsInRpZCI6IjA2ZjFiODlmLTA3ZTgtNDY0Zi1iNDA4LWVjMWI0NTcwM2YzMSIsInVuaXF1ZV9uYW1lIjoiVnVvbmcuTlQyMDYzMTNAc2lzLmh1c3QuZWR1LnZuIiwidXBuIjoiVnVvbmcuTlQyMDYzMTNAc2lzLmh1c3QuZWR1LnZuIiwidXRpIjoiU3R4OGE0cW8wa0NVOVV0b29BUm5BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.R5AjIAHkgcNn1J8cWSjUa10XjtY-u9mlaRm8Pu-m7RILNZkyGbQIKBmRbqUezHWbEcUNsYMfB7Q6JVb-Vy6GcSXIivgAlS5ILenr7Ru9WaGkPEzZBcI_9oD492HbKtq909b7fTr3cYCwg3LbnINryyJ5llkK5e2n_tLmt3SA1EapRWfj5p--q15QSQ7iJTZH2Dof34maRUyEi-xgqNFNZgeUL-ANSmT9Dyts3uH5aC2wnncrudE1hTTa9lEZ3J3G7IpztKYuWjmCLYW66z46bop4JDPLIH_hj1VMQ4GYKPVLFYuAH9XYkPhELKwXuDG9JgrTyPVoqNdqkXkfwmYEbA',
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
