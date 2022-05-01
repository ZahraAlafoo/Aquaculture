<template>
  <div class="pagetitle">
    <h1>Dashboard</h1>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item active">Dashboard</li>
      </ol>
    </nav>
  </div>
  <!-- End Page Title -->
  <section class="section dashboard">
    <div class="row">
      <!-- Left side columns -->
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
        <div class="row">
          <!-- Sales Card -->

          <!-- Reports -->
          <div class="col-12">
            <div class="card">
              <div class="card-body pt-3">
                <!-- Bordered Tabs -->
                <ul class="nav nav-tabs nav-tabs-bordered">
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-overview"
                    >
                      Pie Chart
                    </button>
                  </li>

                  <li class="nav-item">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-edit"
                    >
                      Line Chart
                    </button>
                  </li>
                </ul>
                <div class="tab-content pt-2">
                  <div
                    class="tab-pane fade show active profile-overview"
                    id="profile-overview"
                  >
                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"
                        ><i class="bi bi-three-dots"></i
                      ></a>
                      <ul
                        class="
                          dropdown-menu dropdown-menu-end dropdown-menu-arrow
                        "
                      >
                        <li>
                          <a
                            class="dropdown-item"
                            @click="
                              exportGraphs(
                                `https://s6nw9567xd.execute-api.us-east-1.amazonaws.com/render/d-solo/V29nmK8nz/dive-deep?orgId=1&refresh=5m&from=1648771263222&to=1651363263222&panelId=8&width=1000&height=500&tz=Asia%2FBahrain`, 'temperature_gauge.pdf'
                              )
                            "
                            >Export as PDF</a
                          >
                        </li>
                      </ul>
                    </div>
                    <iframe
                      src="https://admin.bp-cic.com/d-solo/V29nmK8nz/dive-deep?orgId=1&from=1648149360879&to=1650741360879&theme=light&panelId=8"
                      width="100%"
                      height="300"
                      frameborder="0"
                    ></iframe>
                  </div>
                  <div class="tab-pane fade profile-edit" id="profile-edit">
                    <div class="filter">
                      <a class="icon" data-bs-toggle="dropdown"
                        ><i class="bi bi-three-dots"></i
                      ></a>
                      <ul
                        class="
                          dropdown-menu dropdown-menu-end dropdown-menu-arrow
                        "
                      >
                        <li>
                          <a
                            class="dropdown-item"
                            @click="
                              exportGraphs(
                                `https://s6nw9567xd.execute-api.us-east-1.amazonaws.com/render/d-solo/V29nmK8nz/dive-deep?orgId=1&refresh=5m&from=1648770954293&to=1651362954293&panelId=6&width=1000&height=500&tz=Asia%2FBahrain`, 'temperature_graph.pdf'
                              )
                            "
                            >Export as PDF</a
                          >
                        </li>
                      </ul>
                    </div>
                    <iframe
                      src="https://admin.bp-cic.com/d-solo/V29nmK8nz/dive-deep?orgId=1&from=1648149384459&to=1650741384459&theme=light&panelId=6"
                      width="100%"
                      height="300"
                      id="test"
                      frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Reports -->
          <div class="col-12">
            <div class="card">
              <div class="card-body pt-3">
                <!-- Bordered Tabs -->
                <ul class="nav nav-tabs nav-tabs-bordered">
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-overview2"
                    >
                      Pie Chart
                    </button>
                  </li>

                  <li class="nav-item">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-edit2"
                    >
                      Line Chart
                    </button>
                  </li>
                </ul>
                <div class="tab-content pt-2">
                  <div
                    class="tab-pane fade show active profile-overview"
                    id="profile-overview2"
                  >
                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"
                        ><i class="bi bi-three-dots"></i
                      ></a>
                      <ul
                        class="
                          dropdown-menu dropdown-menu-end dropdown-menu-arrow
                        "
                      >
                        <li>
                          <a
                            class="dropdown-item"
                            @click="
                              exportGraphs(
                                `https://s6nw9567xd.execute-api.us-east-1.amazonaws.com/render/d-solo/V29nmK8nz/dive-deep?orgId=1&refresh=5m&from=1648770665663&to=1651362665663&panelId=12&width=1000&height=500&tz=Asia%2FBahrain`, 'oxygen_gauge.pdf'
                              )
                            "
                            >Export as PDF</a
                          >
                        </li>
                      </ul>
                    </div>
                    <iframe
                      src="https://admin.bp-cic.com/d-solo/V29nmK8nz/dive-deep?orgId=1&from=1648149368825&to=1650741368825&theme=light&panelId=12"
                      width="100%"
                      height="300"
                      frameborder="0"
                    ></iframe>
                  </div>
                  <div class="tab-pane fade profile-edit" id="profile-edit2">
                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"
                        ><i class="bi bi-three-dots"></i
                      ></a>
                      <ul
                        class="
                          dropdown-menu dropdown-menu-end dropdown-menu-arrow
                        "
                      >
                        <li>
                          <a
                            class="dropdown-item"
                            @click="
                              exportGraphs(
                                `https://s6nw9567xd.execute-api.us-east-1.amazonaws.com/render/d-solo/V29nmK8nz/dive-deep?orgId=1&refresh=5m&from=1648771089454&to=1651363089454&panelId=10&width=1000&height=500&tz=Asia%2FBahrain`,'oxygen_graph.pdf'
                              )
                            "
                            >Export as PDF</a
                          >
                        </li>
                      </ul>
                    </div>
                    <iframe
                      src="https://admin.bp-cic.com/d-solo/V29nmK8nz/dive-deep?orgId=1&from=1648149394607&to=1650741394607&theme=light&panelId=10"
                      width="100%"
                      height="300"
                      id="test"
                      frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="card recent-sales overflow-auto">
              <div class="card-body">
                <h5 class="card-title">Recent Sales <span>| Today</span></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "dashboard",
  methods: {
    async exportGraphs(url, name) {
      var doc = new jsPDF("p", "mm", "a4");

      var image = await new Promise((resolve) => {
        var image = new Image();
        image.setAttribute("crossOrigin", "anonymous"); //getting images from external domain

        image.onload = function () {
          var canvas = document.createElement("canvas");
          canvas.width = this.naturalWidth;
          canvas.height = this.naturalHeight;

          //next three lines for white background in case png has a transparent background
          var ctx = canvas.getContext("2d");
          ctx.fillStyle = "#fff"; /// set white fill style
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          canvas.getContext("2d").drawImage(this, 0, 0);

          resolve(canvas.toDataURL("image/jpeg"));
        };

        image.src = url;
      });

      doc.addImage(image, "PNG", 0, 0, 225, 112);
      doc.save(name);
    },
  },
  mounted: function () {
    const recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style>
</style>