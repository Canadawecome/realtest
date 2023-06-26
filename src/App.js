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
          embedConfig={
            {
              type: 'report', // Supported types: report, dashboard, tile, visual, and qna.
              id: '71530fca-a9f0-45a4-8527-420b614ac002',
              embedUrl: "https://app.powerbi.com/reportEmbed?reportId=71530fca-a9f0-45a4-8527-420b614ac002&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
              accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDZmMWI4OWYtMDdlOC00NjRmLWI0MDgtZWMxYjQ1NzAzZjMxLyIsImlhdCI6MTY4Nzc0ODE5MiwibmJmIjoxNjg3NzQ4MTkyLCJleHAiOjE2ODc3NTI5MTcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFtSVl0VnVQYTNudytmU3NzcU5EaTV3dW5DUmxmTEdyUVYvN1dORlYyU3hGRng4TTVicnNlRnRXYTBWUGRuOXFXIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjExOC43MC4xNTYuNDMiLCJuYW1lIjoiTmd1eWVuIFRhdCBWdW9uZyAyMDIwNjMxMyIsIm9pZCI6ImJiZjhjMTFmLWI2ZmYtNGZmNC04MDBkLTM1YjIxYmM5MTQ4ZiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yNzQ2MjUxMDA3LTEzMjQ1OTUyMDYtNzgxNjU0MzUxLTc5NDgxIiwicHVpZCI6IjEwMDMyMDAwRUExODYzMzUiLCJyaCI6IjAuQVhJQW43anhCdWdIVDBhMENPd2JSWEFfTVFrQUFBQUFBQUFBd0FBQUFBQUFBQUJ5QUVJLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImE1YUVIVlJPdEZHeHVMNzFaRHA4X1lieXZ1aGt3dkh3MXowQmRfeFBHN3ciLCJ0aWQiOiIwNmYxYjg5Zi0wN2U4LTQ2NGYtYjQwOC1lYzFiNDU3MDNmMzEiLCJ1bmlxdWVfbmFtZSI6IlZ1b25nLk5UMjA2MzEzQHNpcy5odXN0LmVkdS52biIsInVwbiI6IlZ1b25nLk5UMjA2MzEzQHNpcy5odXN0LmVkdS52biIsInV0aSI6IlNZb0JPOE9PVlVhTlVTSUpPdlFZQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.h1DrHVQQIhsBqpZHXx4cW1pUmM-Jod4S4ngDsRgaDiW_CMDToK1c2Oi7l_Z_9M4CMcmoy0yLBBZ7ViIjiUmQWDQbAtlvBE5sCwukVx6XwXdQ8GFA7zVFAiQwoVfIJIXCPlpT1iAGLWi7Ir4RiJCc3gCIHNyZS4fpgXBXKGTArV5s87C0O6l_9KtVyoIFOe_UZB-1Hp30EIVlaffw4PFFkK6Q4_uX_t1L-9Uz_VPi33LCePsLgwcnXicghi6wJnPimfM0_MHnR4tneWxz7rzLuvoqjgs9Z_rKZsOy08EQj9Tvz_OwFomBxyhOEt-yjSP_a1dsjbhqIE1S0bBOuT1xgg',
              tokenType: models.TokenType.Embed, // Use models.TokenType.Aad if you're embedding for your organization.
              settings: {
                panes: {
                  filters: {
                    expanded: false,
                    visible: false
                  }
                },
              }
            }
          }

          eventHandlers={
            new Map([
              ['loaded', function () {
                console.log('Report loaded');
              }],
              ['rendered', function () {
                console.log('Report rendered');
              }],
              ['error', function (event) {
                console.log(event.detail);
              }]
            ])
          }

          cssClassName={
            "report-style-class"
          }

          getEmbeddedComponent={
            (embeddedReport) => {
              window.report = embeddedReport;
            }
          }
        />
        embedConfig = {
          {
            type: 'report', // Supported types: report, dashboard, tile, visual, and qna.
            id: undefined,
            embedUrl: undefined,
            accessToken: undefined, // Keep as an empty string, null, or undefined.
            tokenType: models.TokenType.Embed
          }
        }
      </header>
    </div>
  );
}

export default App;
