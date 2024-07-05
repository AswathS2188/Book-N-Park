import Button from "@mui/material/Button";
import { Box } from "@mui/system";
const Dashboard = () => {
  const Record = [
    {
      id: 1,
      name: "Vishwaa",
      place: "Vellore",
      vehicle: "TN 23 HJ 5555",
      date: "17-06-24",
    },
    {
      id: 2,
      name: "Vishwaa",
      place: "Vellore",
      vehicle: "TN 23 HJ 5555",
      date: "17-06-24",
    },
    {
      id: 3,
      name: "Vishwaa",
      place: "Vellore",
      vehicle: "TN 23 HJ 5555",
      date: "17-06-24",
    },
    {
      id: 4,
      name: "Vishwaa",
      place: "Vellore",
      vehicle: "TN 23 HJ 5555",
      date: "17-06-24",
    },
    {
      id: 5,
      name: "Vishwaa",
      place: "Vellore",
      vehicle: "TN 23 HJ 5555",
      date: "17-06-24",
    },
  ];
  //   const [record, setRecord] = useState([]);
  //   const getData = () => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((resposne) => resposne.json())
  //       .then((res) => {
  //         setRecord(res);
  //       });
  //   };
  //   useEffect(() => {
  //     getData();
  //   });

  return (
    <div class="container-fluid px-5">
      <div class="row align-items-start">
        <p class="pt-3 display-4">DashBoard</p>
        <div class="col main text-center">
          <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
              <div class="card bg-success text-white h-100">
                <div class="card-body bg-success">
                  <div class="rotate">
                    <i class="fa fa-user fa-3x"></i>
                  </div>
                  <h6 class="text-uppercase pt-2">Name</h6>
                  <h3 class="">Vishwaa M S</h3>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
              <div class="card text-white bg-danger h-100">
                <div class="card-body bg-danger">
                  <div class="rotate">
                    <i class="fa fa-envelope fa-3x"></i>
                  </div>
                  <h6 class="text-uppercase pt-2">Email</h6>
                  <h3 class="">vms@gmail.com</h3>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
              <div class="card text-white bg-primary h-100">
                <div class="card-body bg-primary">
                  <div class="rotate">
                    <i class="fa fa-car fa-3x"></i>
                  </div>
                  <h6 class="text-uppercase pt-2">Vehicle Details</h6>
                  <h3 class="">TN 23 HJ 5555</h3>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
              <div class="card text-white bg-warning h-100">
                <div class="card-body">
                  <div class="rotate">
                    <i class="fa fa-bookmark fa-3x"></i>
                  </div>
                  <h6 class="text-uppercase pt-2">Booking Status</h6>
                  <h3 class="">Reserved</h3>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div class="row">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h4 class="mt-3 mb-3 text-black text-start">Booking History</h4>
              <div class="table-responsive pt-3">
                <table class="table table-striped table-bordered">
                  <thead class="thead-light">
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Place</th>
                      <th>Vehicle Number</th>
                      <th>Date and Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Record.slice(0, 5).map((output) => (
                      <tr>
                        <td>{output.id}</td>
                        <td>{output.name}</td>
                        <td>{output.place}</td>
                        <td>{output.vehicle}</td>
                        <td>{output.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
              <h4 className="title mt-3 mb-3 text-center text-secondary">
                Book a Slot!
              </h4>
              <div class="text-center">
                <Button variant="contained">Book Now!</Button>
                <hr></hr>
                <Button variant="outlined">Cancel Booking</Button>
              </div>
              <div
                className="mb-5"
                style={{ height: "300px", width: "400px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
