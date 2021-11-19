<template>
<div>
    <header class="navbar navbar-dark bg-light flex-md-nowrap sticky-top p-0 shadow evo-header">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 evo-navbar-brand" href="#">EVO</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="navbar-nav">
        <!-- <div class="nav-item text-nowrap">
        <a class="nav-link px-3" href="#">Sign out</a>
        </div> -->
    </div>
    </header>

    <div class="container-fluid" >
    <div class="row">
        
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse evo-sidebar">
            <input class="form-control form-control-dark w-100 evo-nav-search" type="text" placeholder="Search" aria-label="Search">
            <div class="position-sticky pt-3 evo-nav-div">
                <ul class="nav flex-column evo-nav-ul">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                        Welcome
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <span data-feather="file"></span>
                        Data Import
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                        Import requests
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <span data-feather="users"></span>
                        Self onboarding process
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                        Change plan
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <span data-feather="layers"></span>
                        Evo University
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <span data-feather="layers"></span>
                        Protal &amp; adding stats
                    </a>
                </li>
                </ul>

            </div>
        </nav>

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Test</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
            </div>
        </div>


        <h2 style="text-align:left">Select requests to perform actions</h2>
        
        <TableArea />

        <!-- <div class="table-responsive">
            <table class="table table-striped table-sm">
            <thead>
                <tr>
                <th scope="col"> <input type="checkbox"> </th>
                <th scope="col"></th>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Date</th>
                <th scope="col">Gender</th>
                <th scope="col"></th>
                <th scope="col"></th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="data in tableData" :key="data.id">
                <td><input type="checkbox"></td>
                <td></td>
                <td>{{ data.id }}</td>
                <td>{{ data.first_name }}</td>
                <td>{{ data.last_name }}</td>
                <td>{{ data.date }}</td>
                <td>{{ data.gender }}</td>
                <td><i class="fa fa-edit"></i></td>
                <td><i class="fa fa-delete"></i></td>
                </tr>
                
            </tbody>
            </table>
        </div> -->

        </main>
    </div>
    </div>
</div>
</template>

<script>
import TableArea from '../components/TableArea.vue'

export default {
  name: 'Dashboard',
  components: {
      TableArea
  },
  data() {
      return {
          tableData: [
                {
                    "id": 1,
                    "first_name": "Jesse", 
                    "last_name": "Simmons", 
                    "date": "2016-10-15 13:43:27", 
                    "gender": "Male",
                    "notes": ""
                },
                {
                    "id": 2,
                    "first_name": "John", 
                    "last_name": "Doe",
                    "date": "2016-10-15 13:43:27", 
                    "gender": "Male",
                    "notes": "Something"
                },
                {
                    "id": 3,
                    "first_name": "Jesse", 
                    "last_name": "Simmons", 
                    "date": "2016-10-15 13:43:27", 
                    "gender": "Male",
                    "notes": ""
                }
            ]
      }
  },
  methods: {

  }
}
</script>