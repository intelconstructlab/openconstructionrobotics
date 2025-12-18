// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/openconstructionrobotics/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "We collect open-source construction robotics projects here",
          section: "Navigation",
          handler: () => {
            window.location.href = "/openconstructionrobotics/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/openconstructionrobotics/publications/";
          },
        },{id: "nav-education",
          title: "education",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/openconstructionrobotics/blog/";
          },
        },{id: "nav-team",
          title: "team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/openconstructionrobotics/people/";
          },
        },{id: "post-jetson-nano-project-template-environmental-sensor",
        
          title: "Jetson Nano project template-environmental sensor",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/openconstructionrobotics/blog/2023/jetson-tutorial3/";
          
        },
      },{id: "post-jetson-nano-project-template-camera",
        
          title: "Jetson Nano project template-camera",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/openconstructionrobotics/blog/2023/jetson-tutorial2/";
          
        },
      },{id: "post-jetson-nano-project-tutorial-hardware",
        
          title: "Jetson Nano project tutorial-hardware",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/openconstructionrobotics/blog/2023/jetson-tutorial1/";
          
        },
      },{id: "post-xarm-ufactury-studio-and-python-sdk-examples",
        
          title: "XArm Ufactury studio and Python SDK examples",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/openconstructionrobotics/blog/2023/xarm-doc1/";
          
        },
      },{id: "post-unitree-go-1-edu-doc-3d-lidar-usage-and-slam",
        
          title: "Unitree Go 1 EDU doc--3D LiDAR usage and SLAM",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/openconstructionrobotics/blog/2023/go1-doc2/";
          
        },
      },{id: "post-unitree-go-1-edu-doc-control-with-legged-sdk-and-ros",
        
          title: "Unitree Go 1 EDU doc--control with legged SDK and ROS",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/openconstructionrobotics/blog/2023/go1-doc1/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/openconstructionrobotics/books/the_godfather/";
            },},{id: "news-we-just-release-our-website-sparkles-smile",
          title: 'We just release our website! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-acteabot",
          title: 'AcTEAbot',
          description: "a robot for thermal inspection in ceilings",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/1_project/";
            },},{id: "projects-icon-pose",
          title: 'ICON-Pose',
          description: "The first open dataset with 1,103 egocentric images and corresponding 2D construction worker poses across 63 action types.",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/2_project/";
            },},{id: "projects-egoaction-dataset",
          title: 'EgoAction Dataset',
          description: "EgoAction is a real-world construction action recognition dataset built upon the Ego4D framework.",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/3_project/";
            },},{id: "projects-indoor-firerescue-radar-dataset",
          title: 'Indoor FireRescue Radar dataset',
          description: "4D Indoor Millimeter Wave Dataset and Analysis for Hazardous Environment Perception",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/4_project/";
            },},{id: "projects-construction-site-vlm",
          title: 'Construction Site VLM',
          description: "The dataset consists of a total of 10,013 construction site images and their annotations. Among them, 7,009 images are assigned to the training split while 3,004 images are assigned to the test split.",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/6_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/9_project/";
            },},{id: "projects-christine-suen",
          title: 'Christine SUEN',
          description: "PhD@Columbia",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/christine_suen/";
            },},{id: "projects-ci-jyun-polar-liang",
          title: 'Ci-Jyun Polar Liang',
          description: "Assistant Professor at Stony Brook University",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/cj_liang/";
            },},{id: "projects-harry-zhang",
          title: 'Harry Zhang',
          description: "PhD@UBC",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/harry_zhang/";
            },},{id: "projects-kangkang-duan",
          title: 'Kangkang Duan',
          description: "PhD@UBC",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/kangkang_duan/";
            },},{id: "projects-lei-huang",
          title: 'Lei Huang',
          description: "PhD@Columbia",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/lei_huang/";
            },},{id: "projects-weijia-cai",
          title: 'Weijia Cai',
          description: "PhD@Columbia",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/weijia_cai/";
            },},{id: "projects-zhengbo-zou",
          title: 'Zhengbo Zou',
          description: "Assistant Professor",
          section: "Projects",handler: () => {
              window.location.href = "/openconstructionrobotics/projects/zhengbo_zou/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/openconstructionrobotics/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/openconstructionrobotics/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
