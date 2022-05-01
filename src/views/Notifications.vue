<script setup>
import Amplify from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-vue";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);
</script>

<template>
  <html>
    <body>
      <!-- ======= Header ======= -->
      <header id="header" class="header fixed-top d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-between">
          <a href="/" class="logo d-flex align-items-center">
            <img
              src="../../public/frontend/assets/img/medaar-logo.png"
              alt=""
            />
            <span class="d-none d-lg-block">Medaar</span>
          </a>
          <i class="bi bi-list toggle-sidebar-btn"></i>
        </div>
        <!-- End Logo -->

        <!-- End Search Bar -->

        <nav class="header-nav ms-auto">
          <ul class="d-flex align-items-center">
            <li class="nav-item d-block d-lg-none">
              <a class="nav-link nav-icon search-bar-toggle" href="#">
                <i class="bi bi-search"></i>
              </a>
            </li>
            <!-- End Search Icon-->

            <li class="nav-item dropdown pe-3">
              <!-- End Profile Iamge Icon -->

              <a
                class="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="../../public/frontend/assets/img/user.jpg"
                  alt="Profile"
                  class="rounded-circle"
                />
                <span class="d-none d-md-block dropdown-toggle ps-2">
                  <authenticator id="auth">
                    <template v-slot="{ user }">
                      {{ user.attributes.given_name }}
                      {{ user.attributes.family_name }}
                    </template></authenticator
                  >
                </span> </a
              ><!-- End Profile Iamge Icon -->

              <ul
                class="
                  dropdown-menu dropdown-menu-end dropdown-menu-arrow
                  profile
                "
              >
                <li class="dropdown-header">
                  <authenticator id="auth">
                    <template v-slot="{ user }">
                      {{ user.attributes.given_name }}
                      {{ user.attributes.family_name }}
                    </template></authenticator
                  >
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <router-link to="/profile">
                    <a class="dropdown-item d-flex align-items-center">
                      <i class="bi bi-person"></i>
                      <span>My Profile</span>
                    </a></router-link
                  >
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    @click="signOut"
                  >
                    <i class="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
              <!-- End Profile Dropdown Items -->
            </li>
            <!-- End Profile Nav -->
          </ul>
        </nav>
        <!-- End Icons Navigation -->
      </header>

      <div id="container">
        <!-- ======= Sidebar ======= -->
        <aside id="sidebar" class="sidebar">
          <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <!-- End Dashboard Nav -->

            <li class="nav-item">
              <a
                class="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i class="bi bi-pen"></i><span>Update Conditions</span
                ><i class="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="components-nav"
                class="nav-content collapse"
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <router-link to="/change-temp">
                    <i class="bi bi-circle"></i
                    ><span>Change Temperature Rates</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/change-oxygen">
                    <i class="bi bi-circle"></i><span>Change Oxygen Rates</span>
                  </router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link to="/overview">
                <a class="nav-link collapsed">
                  <i class="bi bi-bell"></i>
                  <span>Tanks Overview</span>
                </a>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/notifications">
                <a class="nav-link collapsed">
                  <i class="bi bi-bell"></i>
                  <span>Notifications</span>
                </a>
              </router-link>
            </li>
            <!-- End Notifications Page Nav -->

            <li class="nav-item">
              <router-link to="/profile">
                <a class="nav-link collapsed">
                  <i class="bi bi-person"></i>
                  <span>Profile</span>
                </a></router-link
              >
            </li>
            <!-- End Profile Page Nav -->
          </ul>
        </aside>
        <!-- End Sidebar-->

        <main id="main" class="main">
          <div class="pagetitle">
            <h1>Notifications</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active">Notifications</li>
              </ol>
            </nav>
          </div>
          <!-- End Page Title -->

          <section class="section">
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-8">
                <div class="card" style="padding-top: 30px">
                  <div class="card-body">
                    <div v-for="(album, idx) in formValues.min" :key="idx">
                      <div
                        class="alert alert-danger alert-dismissible fade show"
                        role="alert"
                      >
                        <h4 class="alert-heading">
                          {{ formValues.titles[idx] }}
                        </h4>
                        <br />
                        <p>{{ formValues.messages[idx] }}</p>
                        <hr />
                        <p class="mb-0">{{ formValues.dates[idx] }}</p>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <!-- End #main -->

        <!-- ======= Footer ======= -->
        <footer id="footer" class="footer">
          <div class="copyright">
            &copy; Copyright <strong><span>Medaar</span></strong
            >. All Rights Reserved
          </div>
          <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </footer>
        <!-- End Footer -->

        <a
          href="#"
          class="back-to-top d-flex align-items-center justify-content-center"
          ><i class="bi bi-arrow-up-short"></i
        ></a>
      </div>
    </body>
  </html>
</template>

<script>
import postscribe from "postscribe";
import { API } from "aws-amplify";
import { Auth } from "aws-amplify";

export default {
  name: "notifications",
  async mounted() {
     postscribe(
      "#container",
      `<script>/**
* Template Name: NiceAdmin - v2.2.2
* Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  /**
   * Initiate quill editors
   */
  if (select('.quill-editor-default')) {
    new Quill('.quill-editor-default', {
      theme: 'snow'
    });
  }

  if (select('.quill-editor-bubble')) {
    new Quill('.quill-editor-bubble', {
      theme: 'bubble'
    });
  }

  if (select('.quill-editor-full')) {
    new Quill(".quill-editor-full", {
      modules: {
        toolbar: [
          [{
            font: []
          }, {
            size: []
          }],
          ["bold", "italic", "underline", "strike"],
          [{
              color: []
            },
            {
              background: []
            }
          ],
          [{
              script: "super"
            },
            {
              script: "sub"
            }
          ],
          [{
              list: "ordered"
            },
            {
              list: "bullet"
            },
            {
              indent: "-1"
            },
            {
              indent: "+1"
            }
          ],
          ["direction", {
            align: []
          }],
          ["link", "image", "video"],
          ["clean"]
        ]
      },
      theme: "snow"
    });
  }

  /**
   * Initiate TinyMCE Editor
   */

  var useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  tinymce.init({
    selector: 'textarea.tinymce-editor',
    plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
    imagetools_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
    toolbar_sticky: true,
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    link_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_class_list: [{
        title: 'None',
        value: ''
      },
      {
        title: 'Some class',
        value: 'class-name'
      }
    ],
    importcss_append: true,
    file_picker_callback: function(callback, value, meta) {
      /* Provide file and text for the link dialog */
      if (meta.filetype === 'file') {
        callback('https://www.google.com/logos/google.jpg', {
          text: 'My text'
        });
      }

      /* Provide image and alt text for the image dialog */
      if (meta.filetype === 'image') {
        callback('https://www.google.com/logos/google.jpg', {
          alt: 'My alt text'
        });
      }

      /* Provide alternative source and posted for the media dialog */
      if (meta.filetype === 'media') {
        callback('movie.mp4', {
          source2: 'alt.ogg',
          poster: 'https://www.google.com/logos/google.jpg'
        });
      }
    },
    templates: [{
        title: 'New Table',
        description: 'creates a new table',
        content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
      },
      {
        title: 'Starting my story',
        description: 'A cure for writers block',
        content: 'Once upon a time...'
      },
      {
        title: 'New list with dates',
        description: 'New List with dates',
        content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
      }
    ],
    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
    contextmenu: 'link image imagetools table',
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

  /**
   * Initiate Bootstrap validation check
   */
  var needsValidation = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(needsValidation)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

  /**
   * Initiate Datatables
   */
  const datatables = select('.datatable', true)
  datatables.forEach(datatable => {
    new simpleDatatables.DataTable(datatable);
  })

  /**
   * Autoresize echart charts
   */
  const mainContainer = select('#main');
  if (mainContainer) {
    setTimeout(() => {
      new ResizeObserver(function() {
        select('.echart', true).forEach(getEchart => {
          echarts.getInstanceByDom(getEchart).resize();
        })
      }).observe(mainContainer);
    }, 200);
  }

})();<\/script>`
    );
    await API.get("getnotifications", "/notifications", {})
      .then((result) => {
        var test = JSON.parse(result.body);
        var titles = [];
        var messages = [];
        var dates = [];
        for (let index = 0; index < test.length; index++) {
          titles[index] = test[index].title.S;
          messages[index] = test[index].message.S;
          dates[index] = test[index].date.S;
        }
        this.formValues.min = test;
        this.formValues.titles = titles;
        this.formValues.messages = messages;
        this.formValues.dates = dates;
      })
      .catch((err) => {
        console.log(err);
      });

    function l() {
      return 3;
    }
  },
  methods: {
    async signOut() {
      await Auth.signOut();
      this.$router.push("/Login");
    },
  },
  data() {
    return {
      formValues: {
        min: 1,
        titles: "",
        dates: "",
        messages: ""
      },
    };
  },
};
</script>

<style>
</style>