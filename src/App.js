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
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDZmMWI4OWYtMDdlOC00NjRmLWI0MDgtZWMxYjQ1NzAzZjMxLyIsImlhdCI6MTY4ODAyMjU5MiwibmJmIjoxNjg4MDIyNTkyLCJleHAiOjE2ODgwMjc2ODIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUEzSEc3V2E1ZTduOUhyRnUrbURCcVA2dFUwMm51OUxIL1VJMDUxUSs4b09BbXRtRzIrUll6KzFVYXQ3TnNyWjlDIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjExOC43MC4xMjguMjM2IiwibmFtZSI6Ik5ndXllbiBUYXQgVnVvbmcgMjAyMDYzMTMiLCJvaWQiOiJiYmY4YzExZi1iNmZmLTRmZjQtODAwZC0zNWIyMWJjOTE0OGYiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjc0NjI1MTAwNy0xMzI0NTk1MjA2LTc4MTY1NDM1MS03OTQ4MSIsInB1aWQiOiIxMDAzMjAwMEVBMTg2MzM1IiwicmgiOiIwLkFYSUFuN2p4QnVnSFQwYTBDT3diUlhBX01Ra0FBQUFBQUFBQXdBQUFBQUFBQUFCeUFFSS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJhNWFFSFZST3RGR3h1TDcxWkRwOF9ZYnl2dWhrd3ZIdzF6MEJkX3hQRzd3IiwidGlkIjoiMDZmMWI4OWYtMDdlOC00NjRmLWI0MDgtZWMxYjQ1NzAzZjMxIiwidW5pcXVlX25hbWUiOiJWdW9uZy5OVDIwNjMxM0BzaXMuaHVzdC5lZHUudm4iLCJ1cG4iOiJWdW9uZy5OVDIwNjMxM0BzaXMuaHVzdC5lZHUudm4iLCJ1dGkiOiJvSDZIQ0tRWkVrbWhyZHgtS2s4UkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.PiXqVgnVPimjcPoqzqNT-N3t7USPUvQlR-cPTVwzJxmRjETUpAowrFkThIZwQlMiJNsnknFuz3sCWNzKmkloRSc4cgw5KvfoUQuSG_2PJN8qcaobFYFzcLPJZ98Bu1AA0C_5Y9jGsD7rPxOlB1GdDsZlq1MIVttyX0SE5PEGmPAY51mFoaMeg0yVU6WfjAJgGE2tPV78_8L7WeAUj5JT9GJWdvV5fBRMaYYKgwBW38zYjz3H3nXyJPD-VkhRU4psv85KCj8v8J2bbwqHuZXZW8i0IBxGcqTLPIKzbjCupbWBCFNABLeku_ysfd3bCGZ6csEtMXCdVi5FdUq2eSaMoQ'
            , tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
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
