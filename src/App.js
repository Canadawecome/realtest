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
            id: '2ec2749e-81f9-403c-932f-41717b59e586',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=2ec2749e-81f9-403c-932f-41717b59e586&groupId=090cfcf9-c81b-4a61-9e17-11f663f35ff6&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDZmMWI4OWYtMDdlOC00NjRmLWI0MDgtZWMxYjQ1NzAzZjMxLyIsImlhdCI6MTY4ODcwODE5MSwibmJmIjoxNjg4NzA4MTkxLCJleHAiOjE2ODg3MTI0NDQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFiL2hTbHBDTDhWYVZkbDdqbHRpWXhibDBraHR1VERTeHpDaDhha0Z3SlgxNXhaMk5kMjVyZlA2cTRTenFiU0FYIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjU4LjE4Ny43Ny42OCIsIm5hbWUiOiJOZ3V5ZW4gVGF0IFZ1b25nIDIwMjA2MzEzIiwib2lkIjoiYmJmOGMxMWYtYjZmZi00ZmY0LTgwMGQtMzViMjFiYzkxNDhmIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTI3NDYyNTEwMDctMTMyNDU5NTIwNi03ODE2NTQzNTEtNzk0ODEiLCJwdWlkIjoiMTAwMzIwMDBFQTE4NjMzNSIsInJoIjoiMC5BWElBbjdqeEJ1Z0hUMGEwQ093YlJYQV9NUWtBQUFBQUFBQUF3QUFBQUFBQUFBQnlBRUkuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiYTVhRUhWUk90Rkd4dUw3MVpEcDhfWWJ5dnVoa3d2SHcxejBCZF94UEc3dyIsInRpZCI6IjA2ZjFiODlmLTA3ZTgtNDY0Zi1iNDA4LWVjMWI0NTcwM2YzMSIsInVuaXF1ZV9uYW1lIjoiVnVvbmcuTlQyMDYzMTNAc2lzLmh1c3QuZWR1LnZuIiwidXBuIjoiVnVvbmcuTlQyMDYzMTNAc2lzLmh1c3QuZWR1LnZuIiwidXRpIjoiM1ppNHhoWi1GRXl2cHk5d3l1QmpBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.shHKa2oPlpohl0OWGJE5M2sw9u-ZpN0kEHHX4SNhxHOvCJGstZoQ3L6AFm0sBrahA3Rsg-c2TIzb15JIOk389cUAJAT8zm0wZ4fUzx8oVHEmHraO4eOdfAGLAA0SLR5Fnydoep6nwtLUNyTC_BA8MdHf_jrsX_B4HxXZ1l3IUaR8MGYvTyodSHlXdZHy6fPzpCJKscGWkWxqEgpPenpjpJyi43PHwOeD6R0Iiw2bZEJk4tq601qwGeZdek5frZwpAFPaSmbyku8aQFFvdvSLsMHUsui9Uq4lJ6v_dvuZDLqhzZUtFPLyKGfXhlzwdxfcmL2mCjzOJ08xZUpPSKOpbw',
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
