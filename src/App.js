import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';



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
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDZmMWI4OWYtMDdlOC00NjRmLWI0MDgtZWMxYjQ1NzAzZjMxLyIsImlhdCI6MTY4ODY5NzUyOCwibmJmIjoxNjg4Njk3NTI4LCJleHAiOjE2ODg3MDIxNTEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFRcXF3SWZzTENuZTJvc09JRlhURXJWZHdoK1V3ZWpLakRHNDRGc2h5QUhaYThHRDV5NzZCNWxZYWdUK0ZPVFJ5IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjExOC43MC4zMy43NyIsIm5hbWUiOiJOZ3V5ZW4gVGF0IFZ1b25nIDIwMjA2MzEzIiwib2lkIjoiYmJmOGMxMWYtYjZmZi00ZmY0LTgwMGQtMzViMjFiYzkxNDhmIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTI3NDYyNTEwMDctMTMyNDU5NTIwNi03ODE2NTQzNTEtNzk0ODEiLCJwdWlkIjoiMTAwMzIwMDBFQTE4NjMzNSIsInJoIjoiMC5BWElBbjdqeEJ1Z0hUMGEwQ093YlJYQV9NUWtBQUFBQUFBQUF3QUFBQUFBQUFBQnlBRUkuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiYTVhRUhWUk90Rkd4dUw3MVpEcDhfWWJ5dnVoa3d2SHcxejBCZF94UEc3dyIsInRpZCI6IjA2ZjFiODlmLTA3ZTgtNDY0Zi1iNDA4LWVjMWI0NTcwM2YzMSIsInVuaXF1ZV9uYW1lIjoiVnVvbmcuTlQyMDYzMTNAc2lzLmh1c3QuZWR1LnZuIiwidXBuIjoiVnVvbmcuTlQyMDYzMTNAc2lzLmh1c3QuZWR1LnZuIiwidXRpIjoiQjB2Z0V4M2ZSa3VSbkdfb3hHaGdBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.oIWMPgUsEBAVHchgb9Hp-Xdp8zJIdFSqpAsUNp99hiKZLb5yheDOYRRYuibwfUihQEkmuVk5pfCvXqQP9Hm2x9VzEn_58CP0SVSeRsycH_G3wX9xqxhoz4at2pvYCcEgvzladnCUVPSbSFrqq9vG2_6QijQM0rkZuuc16t6NkDWinBzThqljosC3ZB99BkIQS6hmTYDTHXcGSgUSteQAhfDXnfZsacgHViZ55o3BfcJTo55XiKvo2-dslS1vLForWgHRaMVVBicJUFQhpcRuufm4ifwz2LLvfxP7amDd_I9784qplXWWP1BW-SCV8ln2ktyk1toU3qUtN7fPfVh7bQ'
            , settings: {
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
