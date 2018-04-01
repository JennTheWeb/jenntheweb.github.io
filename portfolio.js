let portfolio = [];
portfolio.push ({
    //thumbProtected: 'raz/dashboard-thumb.png',
    thumbPublic: 'raz/reports-thumb.png',
    caption: 'Case Study',
    contentPublic:
        '<h2 class="galleryContent_description">UX/UI Design, HTML/CSS, PHP and Angular integration</h2>' +
        '<img src="images/portfolio/raz/reports-banner.png" />' +
        
        '<div class="caseStudy_section">' +
            '<h1 class="caseStudy_mainHeading">Reporting and Student Management</h1>' +
            '<h2 class="caseStudy_mainSubheading">Learning A-Z</h2>' +
            '<hr />' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Problem</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    '<p>To manage students and monitor activity and skills in writing, reading, vocabulary, and science, teachers had to navigate multiple similar websites containing a lot of overlapping information. My task was to design one student management portal to hold the student roster, settings, and reports so that teachers could manage their classroom from one web location. In addition, the tables used to display student data  needed to be enhanced with a dashboard containing at-a-glance data visualizations to emphasize the information most important and useful for teachers.</p>' +
                '</div>' +
            '</div>' +
        '</div>' +

        '<div class="caseStudy_section">' +
            '<h2>Process</h2>' +
            '<hr />' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h3>Understand</h3>' +
                '</div>' +
                '<div class="caseStudy_content">' +

                    '<p>The primary instruction I was given was to take the existing reports and split them up based on subject or product. For example, the activity report could no longer hold the amount of data that needed to be displayed and teachers could not understand what all of the data meant or how it was related.</p>' +

                    '<img class="frame" src="images/portfolio/raz/report-before.png" />' +
                    
                    '<p>To get started, I needed to take stock of the reports and understand the similarities and differences between the reports available to each product. Using the Activity report as an example, I listed out all of the activity types and the products they applied to, then re-listed them grouped first by product.</p>'+
                    
                    '<img class="frame" style="width: 500px;" src="images/portfolio/raz/reports-chart2.png" />' +

                    '<p>The instruction I was given was to add tabs for each subject  at the top of each report so that teachers could select which subject\'s data they wanted to view. For example, after selecting "Activity", the teacher would select Reading, Writing, Science, Testing, or Headsprout. Not sure that this was the right approach, I also listed out each report type available to each product.</p>' +

                    '<img class="frame" src="images/portfolio/raz/reports-chart1.png" />' +

                    '<p>Each product has its own unique reports, so by listing the report-type first, teachers would be misled into thinking each report is available for each product. For example, a Writing teacher would click through all of the reports only to find that the only data available for Writing is Activity, or a Science teacher would click through all of the reports, only to find that Activity and Skills are the only relevant ones.</p>' +
                    
                '</div>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h3>Design</h3>' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    '<p>The final design had a product-first tabbed navigation, allowing teachers to easily recognize which reports applied to which subject:</p>' +

                    '<img src="images/portfolio/raz/tabs.png" />' +

                    '<p>With a navigation strategy in place, I marched through the reports one by one, creating mockups showing how each one would look with the tabs incorporated, while also cleaning up the design and bringing visual consistency and throughout, and designing new reports that had since become necessary.</p>' +

                    '<br />' +
                    '<img class="frame" src="images/portfolio/raz/report.png" />' +
                    '<img class="frame" src="images/portfolio/raz/report-hs.png" />' +
                    '<br />' +

                    '<p>In addition, other sections of the site besides reports needed prdouct tabs incorporated along with a design refresh.</p>' +

                '</div><!-- content -->' +
            '</div><!-- row -->' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_img">' +
                    '<h4>Before:</h4>' +
                    '<img class="frame" src="images/portfolio/raz/reports-roster-before.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<h4>After:</h4>' +
                    '<img class="frame" src="images/portfolio/raz/reports-roster-after.png" />' +
                '</div>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_img">' +
                    '<h4>Before:</h4>' +
                    '<img class="frame" src="images/portfolio/raz/reports-studentProfile-before.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<h4>After:</h4>' +
                    '<img class="frame" src="images/portfolio/raz/reports-studentProfile-after.png" />' +
                '</div>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h3>Development</h3>' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    '<p>Development began after a couple of rounds of mockups, as details continued to be worked out in the design. I wrote and integrated HTML and CSS while working closely with other members of the engineering and design teams to refactor and clean up the codebase.</p>' +
                '</div>' +
            '</div>' +

        '</div>' +
        
        '<div class="caseStudy_section">' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Outcome</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +

                    '<p>In the end, teachers did have a single place to go to manage students, and a reorganized interface to review cleaned up reports. In that sense, the project was a success. Many issues were also uncovered and a lot of redesign and refactoring took place throughout the project that will help with future improvements for both engineering and design. But there was a lack of real data to support hypothesis about how teachers would use the site, and outstanding questions and concerns remain about the effectiveness of the reports, and whether or not the architecture and navigation patterns used are the correct ones.</p>' +

                    '<p>Gathering data to develop a clear understanding of the problems that need to be solved and for which types of users could have led to a much more successful outcome of the student management portal. Learning to advocate for these needs and push for a more design-centric process while still respecting and cooperating with existing strategies and processes is a difficult task. There is still much to improve, but this project was a step in the right direction, and opened a door to more user-centric product development.</p>' +

                '</div>' +
            '</div>' +
        '</div>'
})
/*
portfolio.push ({
    //thumbProtected: 'raz/dashboard-thumb.png',
    thumbPublic: 'raz/dashboard-thumb.png',
    caption: 'Case Study',
    contentPublic:
        '<h2 class="galleryContent_description">UX/UI Design, HTML/CSS, PHP and Angular integration</h2>' +
        '<img src="images/portfolio/raz/dashboard-banner.png" />' +

        '<div class="caseStudy_section">' +
            '<h1 class="caseStudy_mainHeading">Teacher Dashboards</h1>' +
            '<h2 class="caseStudy_mainSubheading">Learning A-Z</h2>' +
            '<hr />' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Problem</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +

                    '<p>After the new student management site was launched, work began on new reporting dashboards. A lot of research on data visualization ensued.</p>' +

                    '<p>The requirements provided for the dashboards consisted of whiteboards and notes describing specific charts. Having a manager who agreed that the charts would not work, but not having direct access with the team members providing the requirements, designing these charts was an awkard process of trying to interpret what the intent was behind the charts they came up with, and providing an alternative chart that achieved the same goal in a better way by trimming out irrelevant and distracting information, breaking up data into multiple charts, or combining related data into single ones, and choosing different types of visualizations to better tell the story of the data. It was a long process of interpretation and trial and error between me, my manager, and the product managers who supplied the original charts.</p>' +
           
                '</div>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<img src="images/portfolio/raz/dashboard-sketch.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img src="images/portfolio/raz/dashboard-sketch3.png" />' +
                '</div>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                '</div>' +
                '<div class="caseStudy_content">' +

                    '<p>Once some of the charts became more finalized, development began. Engineering helped uncover edge cases and typical scenarios by pluggin in real data. In some cases pluggins in real data led to realizations that certain data sets were not as useful as intended. Late changes to technical requirements also led to many last minute changes, but in the end we completed the dashboards.</p>' +

                    '<img src="images/portfolio/raz/dashboard-rt.png" />' +
                    '<img src="images/portfolio/raz/dashboard-science.png" />' +
                '</div>' +
            '</div>' +
            
        '</div>' +
        
        '<div class="caseStudy_section">' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Outcome</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +

                    '<p>In the end, teachers did have a single place to go to manage students, a cleaner interface to review cleaned up reports, and new dashboards with charts containing at-a-glance data, so the immediate requirements were satisfied, but a lot of work was still to be done to help teachers find where all of the settings live, and how different data sets interact.</p>' +

                    '<p>With this project, design and engineering had a fantastic opportunity to iron out design and code inconsistencies and introduce new technologies, such as Angular, and develop a more in-depth understanding the tools available for teachers on our sites. Many issues were also uncovered throughout the project that will help inform future improvements for both engineering and design. A lot was also learned about data visualization. All of this learning can translate to a fantastic outcome as the student management portal continues to evolve, but it\'s not there yet.</p>' +

                    '<p>Clear requirements, understanding of the problems to be solved, and user testing could have led to a much more successful outcome of the student management portal. Learning to communicate and advocate for these needs is something I continue to work on, finding the balance between cooperating with existing processes and values and pushing for a more design-centric process.</p>' +

                '</div>' +
            '</div>' +
        '</div>'
});
*/
portfolio.push ({
    //thumbProtected: 'raz/codeStandards-thumb.png',
    thumbPublic: 'raz/codeStandards-thumb.png',
    caption: 'Case Study',
    contentPublic: 
        '<h2 class="galleryContent_description">UI Design, HTML/CSS, Documentation</h2>' +
        '<img src="images/portfolio/raz/codeStandards-banner.png" />' +

        '<div class="caseStudy_section">' +

            '<h1 class="caseStudy_mainHeading">Styleguide and CSS Code Standards</h2>' +
            '<h2 class="caseStudy_mainSubheading">Learning A-Z</h2>' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Problem</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +                  	    
                    '<p>After 10 years of Learning A-Z growing fast, adding new features, and acquiring new products, the UI and CSS codebase were fragile and unruly with files thousands of lines long full of repetition, inconsistencies, and tangled spaghetti code that was clearly reflected in the UI. If someone needed to add a button, there was no "right" button to choose from, and complete terror at the thought of modifying any existing button for fear of unintended consequences.</p>' +
                    
                    '<p>Team members attended a CSS dev conference and came back with ideas of how to use SMACSS methodologies to refactor our CSS, but no one wanted to make the first move. That\'s where I came in.</p>' +

                '</div>' +
            '</div>' +

        '</div>' +
        
        '<div class="caseStudy_section">' +

            '<h2>Process</h2>' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h3>Plan & Implement</h3>' +
                '</div>' +
                '<div class="caseStudy_content">' +   

                    '<p>Having extra time on my hands between projects, and not wanting to see the cleanup initiative die, I created a simple styleguide including a grid system and generic UI components and helpers. I presented this to the team to make sure it was in line with the SMACSS techniques we had discussed, and after some revisions it started to be introduced into new projects.</p>' +

                    '<p>After trying out the new styles with new projects, the painstaking process began to roll out the UI updates in the legacy code.</p>' +

                    '<p>My process was to first take stock of what exists on the sites (buttons, for example)</p>' + 

                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn1.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn2.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn3.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn4.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn6.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn7.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn8.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn9.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn10.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn11.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn12.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn13.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn14.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn15.png" />' +
                    '<img style="display: inline-block; vertical-align: middle;" src="images/portfolio/raz/btn16.png" />' +
                    
                    '<p>Next I needed to find a unified approach that would work for all scenarios without requiring controversial change that would lead to a longer approval process. For example, if there were 3 green buttons, I would pick a good green and use it consistently everywhere, but wouldn\'t change green to orange without good reason. Where there were buttons with icons, I would present a consistent way to create buttons with icons rather than removing the icons, and so on. Once an approach was approved, I wrote HTML/CSS following new guidelines in the styleguide, and implemented it page by page. </p>' +

                    '<img class="frame" src="images/portfolio/raz/styleguide.png" />' +
                    '<img class="frame" src="images/portfolio/raz/styleguide2.png" />' +
                    
                    '<p>Once everything was cleaned up and consistent, it was much easier to make more dramatic change moving forward, such as removing icons or changing colors.</p>' +

                '</div><!-- /content -->' +
            '</div><!-- /row -->' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h3>Evaluate & Pivot</h3>' +
                '</div>' +
                '<div class="caseStudy_content">' +

                    '<p>As changes were rolled out, one problem that surfaced was the over-use of helpers. The same complicated patterns of helper classes were being repeated over and over in a huge number of files. The need for a more module-based approach became clear, leading us to adopt BEM, slightly modified to suit work we had already done with the looser SMACSS method. As our standards evolved and the team grew, the need for definitions of our standards became clear. I updated the styleguide with clear definitions for the new modular approach.</p>' +

                    '<img class="frame" src="images/portfolio/raz/styleguide-codeStandards3.png" />' +

                    '<img class="frame" src="images/portfolio/raz/codeStandards.png" />' +

                '</div><!-- /content -->' +
            '</div><!-- /row -->' +
        
            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h3>Rebranding</h3>' +
                '</div>' +
                '<div class="caseStudy_content">' +

                    '<p>As changes continued to evolve and roll out, the parent site was rebranded, giving a perfect opportunity to establish clean, consistent visual standards across all product sites, starting with the site headers.</p>' +

                    '<h3>Before:</h3>' +

                    '<img class="frame" src="images/portfolio/raz/header-old1.png" />' +
                    '<img class="frame" src="images/portfolio/raz/header-old2.png" />' +
                    '<img class="frame" src="images/portfolio/raz/header-old3.png" />' +

                    '<h3>After:</h3>' +

                    '<img class="frame" src="images/portfolio/raz/header-new1.png" />' +
                    '<img class="frame" src="images/portfolio/raz/header-new5.png" />' +
                    '<img class="frame" src="images/portfolio/raz/header-new2.png" />' +

                '</div>' +
            '</div>' +
        '</div>' +
        
        '<div class="caseStudy_section">' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Outcome</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +

                    '<p>With each new project and iteration of the styleguide, the process and interface continue to improve. The stylesheets are far more maneagle, and the look of the sites continues to become more clean, modern, and consistent.</p>'+

                '</div>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row caseStudy_row-images">' + 
                '<div class="caseStudy_img">' +
                    '<h3>Before</h3>' +
                    '<img class="frame" src="images/portfolio/raz/homepage-old.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<h3>After</h3>' +
                    '<img class="frame" src="images/portfolio/raz/home-new.png" />' +
                '</div>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    '<p> This is an ongoing initiative, especially as Angular use continues to be ironed out, responsive design comes into play, and new CSS features like flex and grid threaten pose new challenges and options. But a solid foundation has been built - a single source of information for designers and engineers to reference when starting any conversation or project, and a lot of practice and shared knowledge in carrying out widespread changes.</p>' +
                '</div>' +
            '</div>' +
        '</div>'
});
portfolio.push ({
    //thumbProtected: 'raz/fileCabinetThumb.png',
    thumbPublic: 'raz/fileCabinetThumb.png',
    caption: 'Case Study',
    contentPublic:
        '<h2 class="galleryContent_description">UX Design, HTML/CSS, Angular integration</h2>' +
        '<img src="images/portfolio/raz/fileCabinet-banner.png" />' +


        '<div class="caseStudy_section">' +
            '<h1 class="caseStudy_mainHeading">File Cabinet and Custom Assignments</h2>' +
            '<h2 class="caseStudy_mainSubheading">Learning A-Z</h2>' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Problem</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    '<p>On the Learning A-Z family of sites, teachers can save books and other resources they like inside a File Cabinet for future use. Teachers can also choose to assign any resource they like for students to complete online.</p>' +
                    '<p>I was asked to redesign the File Cabinet and plan feature enhancements (such as sharing and assigning folders), and to design an additional interface allowing teachers to save multiple resources in a single assignment, assign the collection on the spot, and save the collection for future use. </p>' +
                '</div>' +
            '</div>' +
        '</div>' +

        
        '<div class="caseStudy_section">' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Plan</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    '<p>Initially, the File Cabinet redesign and Custom Assignment process were presented to me as separate projects. But I was essentially being asked to design two interfaces where teachers collect resources, assign them, and save them for future use. The first thing I suggested was one unified project to allow teachers to collect, organize, and assign. This suggestion went over well, and the projects were combined.</p>' +

                    '<p>The next observation I had was that the process of finding something, assigning it now, saving it for later, or collecting a few things and assigning them altogether sounded just like a shopping cart where you can buy now, save in a wish list, or save in a cart and purchase. I suggested a shopping cart experience as inspiration for the UI. This suggestion was also well received, and the brainstorming, wireframing, and design moved forward in this way.</p>' +
                '</div>' +
            '</div>' +
        '</div>' +

        
        '<div class="caseStudy_section">' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>File Cabinet</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    '<p>The File Cabinet redesign was probably the most straightforward part of the project. There was some discussion about whether or not a file cabinet was the proper metaphore to use, but because this had been in place for years already, we stuck with the approach, knowing we could change the metaphore later if necessary, but for now, folders and files are a familiar interface, both on our site and on computers in general.</p>' +

                    '<p>The File Cabinet was largely modeled after Google Drive. Ours is intentionally a much simpler interface with less features, but also designed to feel familiar to file management on computers, or in Google Drive, so that users don\'t have to re-learn file management just to use our site.</p>' +

                '</div>' +
            '</div>' +

            '<hr />' +
            
            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/fileCabinet-sketch.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/fileCabinet-sketch-2.png" />' +
                    '<img class="frame" src="images/portfolio/raz/fileCabinet.png" />' +
                '</div>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h3>Folder Sharing</h3>' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    '<p>Folder sharing was one of the tough parts of the File Cabinet design. There were tradeoffs to be made between being simple and intuitive vs full-featured and complex. I prefer to start simple and do it right, gather feedback, and add features based on what we learn, and for the most part, that is the approach we took. Folders could be public or private. A public folder would be shared with all members of your organization, and private folders can only be viewed by you.</p>' +
        
                    '<p>Sharing was enhanced post-launch to allow sharing with entire districts, schools, or individual teachers. Checkboxes were requested and ultimately used for the interface, but alternatives were also suggested and discussed, largely based on ideas from Google Drive.</p>' +
                    
                '</div>' +
            '</div>' +

            '<hr />' +
            
            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/share1.png" />' +
                    '<img class="frame" src="images/portfolio/raz/share2.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/share3.png" />' +
                    '<img class="frame" src="images/portfolio/raz/share5.png" />' +
                '</div>' +
            '</div>' +

        '</div>' +

        
        '<div class="caseStudy_section">' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Saving Resources</h2>' +
                '</div>' +

                '<div class="caseStudy_content">' +
                    '<div class="caseStudy_words">' +
                        '<p>Before designing I spent a lot of time brainstorming with team members and reviewing different ways of handling shopping carts, and also other ways of assigning educational materials elsewhere. The first approach I tried was a model of Assigning now, or saving for later, with a file cabinet preview opening in a dropdown.</p>' +
                    '</div>' +
                '</div>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/save.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/save2.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/fileCabinetDropdown.png" />' +
                '</div>' +
            '</div>' +
            
            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                '</div>' +
                
                '<div class="caseStudy_content">' +
                    '<div class="caseStudy_words">' +
                        '<p>The feedback received was that the emphasis needed to be on building a collection and assigning it right now, rather than saving it for later. After more brainstorming and gathering ideas from around the web, the next version included an "Add To..." button rather than a "Save" button, with a ribbon rather than a dropdown. Using the "Add" language implied more of an action happening right now, rather than "Save" which implies something for later, and the ribbon allows teachers to actively see their collection being built.</p>' +
                    '</div>' +

                    '<img class="frame" src="images/portfolio/raz/ribbon-sketch.png" />' +
                    '<img class="frame" src="images/portfolio/raz/ribbon2.png" />' +

                    '<div class="caseStudy_words">' +
                        '<p>The final version of the ribbon was changed from gray to almost black, which went along with other site-wide style changes that were being introduced, and also allows the ribbon to stand out much more.</p>' + 

                        '<div class="caseStudy_row">' +
                            '<img class="frame" src="images/portfolio/raz/ribbon3.png" />' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Assigning</h2>' +
                '</div>' +
                
                '<div class="caseStudy_words">' +
                    '<p>The interface for creating creating the assignment also needed to be redesigned:</p>' +
                        
                    '<img class="frame" src="images/portfolio/raz/assignments-note2.png" />' +

                    '<img class="frame" src="images/portfolio/raz/assign.png" />' +
                '</div>' +

            '</div>' +

        '</div>' +
        
        
        '<div class="caseStudy_section">' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Report</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    '<p>During this project, the need arose for an "Assignments" report where teachers can view what they have assigned and to whom. A lot more ideation ensued, discussing what exactly this page would be used for, and where it would live. I got to work putting mockups together, again starting simple, as this page was already a large but necessary bit of scope-creep for the project.</p>' +

                    '<img class="frame" src="images/portfolio/raz/assignments.png" />' +
                '</div>' +
            '</div>' +
        '</div>' +
        
        '<div class="caseStudy_section">' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Development</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    '<p>As mockups were approved, development began. The engineering team used this project as an opportunity to introduce and begin converting our code base to Angular, so a lot of collaboration happened between me and engineering to get caught up to speed with Angular, and to inform them on how to best structure the files for styling purposes, and for future use in the UI.</p>' +
                    
                    '<p>Because of the huge scope of this project and lack of clear requirements, the project evolved every couple of days, with decisions being made too frequently for everyone to keep up with. A lot of decisions needed to be made about modifying assignments, and assigning to groups of students and tracking progress within those groups. A lot of note-taking ensued to wrap my head around these issues and discuss them with other team members.' +

                '</div>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/assignments-notes.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/fileCabinet-notes.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/fileCabinet-notes2.png" />' +
                '</div>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    
                    'I began to document each mockup and requirement in a shared document to keep everyone on the same page. This evolved into a 50+ page document used by design, engineering, and management to communicate and track changes and completion of features.<br /><br /></p>' +

                    '<img class="frame" src="images/portfolio/raz/doc-fileCabinet.png" />' +
                '</div>' +
            '</div>' +
        '</div>' +
        
        '<div class="caseStudy_section">' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Outcome</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +         '<p>In the end, teachers were able to assign groups of resources with just a few clicks, easily view those collections in the File Cabinet, and monitor progress on the Assignments page, so the project was considered a big success. However, there is still much work to be done to tie these features together rather than them being disconnected and spread among different websites despite being so closely intertwined. But many steps were taken in the right direction, resulting in a more useful website for teachers.</p>' +
                '</div>' +
            '</div>' +
        '</div>' +
        
        '<div class="caseStudy_section">' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Reflection</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +         '<p>Throughout the project, as feature changes got out of control, effort was made to understand exactly what the priority was - what problem were we trying to solve? Did we want it to be easy for teachers to plan lessons, or to save their favorites? Did we want to optimize the experience for resource detail pages, or category pages? Did we want to focus on ease of use, or advanced lesson planning? Elementary teachers, or reading specialists? As the saying goes, if you design for everyone, you design for no one. Never have I felt the truth of that saying more than when working on this project. But there was a lot to be proud of, and a lot learned about UX, development, and project management. </p>' +
                '</div>' +
            '</div>' +
        '</div>'
});
portfolio.push ({
    thumbPublic: 'raz/bookBuilder-thumb.png',
    caption: 'Case Study',
    contentPublic:
        '<h2 class="galleryContent_description">Wireframing, UI Design, HTML/CSS/Javascript development</h2>' +
        '<img src="images/portfolio/raz/bookBuilder-banner.png" />' +

        '<div class="caseStudy_section">' +
            '<h1 class="caseStudy_mainHeading">eBook Tools</h2>' +
            '<h2 class="caseStudy_mainSubheading">Kids A-Z</h2>' +

            '<hr />' +

            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Problem</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    '<p>Kids A-Z provides an interface for K-5 students to read ebooks and complete learning activities. These activities relied on Flash which needed to be converted to HTML5. New interactive tools were also added to engage students and aid teacher instruction. I was tasked with designing and working with engineering to implement the design and interactive features. </p>' +
                    
                    '<p>The student interface had also been recently redesigned with beautiful new illustrations by the team, so I wanted to make sure each activity was redesigned as well.<p>' +

                    '<h3>Student Interface</h3>' +
                    '<img class="frame" src="images/portfolio/raz/kids-interface.png" />' +
                '</div>' +
            '</div>' +
        '</div>' +


        '<div class="caseStudy_section">' +
            '<div class="caseStudy_content">' +
                '<h2 style="margin-bottom: 0;">eBook Reader</h2>' +
                '<p style="margin-top: 0;">Tasks included a redesign of the UI for reading books, and prototyping interactions for book resizing and toolbar behavior. </p>' +
            '</div>' +

            '<hr />' +
            
            '<div class="caseStudy_row caseStudy_row-images" style="align-items: start;">' +
                '<div class="caseStudy_img">' +
                    '<h3 style="margin-top: 0;">Before</h3>' +

                    '<img class="frame" src="images/portfolio/raz/bookReader-before2.png" />' +
                    '<img class="frame" style="flex-basis: 50%;" src="images/portfolio/raz/bookReader-before.png" />' +
                '</div>' +    
                '<div class="caseStudy_img">' +
                    '<h3 style="margin-top: 0;">After</h3>' +
                    
                    '<img class="frame" style="flex-basis: 50%;" src="images/portfolio/raz/bookReader-after.png" />' +
                    '<img class="frame" src="images/portfolio/raz/bookReader-after2.png" />' +
                '</div>' +
            '</div>' +
        '</div>' +


        '<div class="caseStudy_section">' +
            '<div class="caseStudy_content">' +
                '<h2 style="margin-bottom: 0;">Quiz</h2>' +
                '<p style="margin-top: 0;">The quiz needed a redesign, and new results screen to accompany the new interface for the ebook reader, and to incorporate the new robot mascot.</p>' +
            '</div>' +

            '<hr />' +

            '<div class="caseStudy_row caseStudy_row-images" style="align-items: start;">' +
                '<div class="caseStudy_img">' +
                    '<h3 style="margin-top: 0;">Before</h3>' +
                    '<img class="frame" src="images/portfolio/raz/quiz-before.png" />' +
                    '<img class="frame" src="images/portfolio/raz/quiz-before2.png" />' +
                '</div>' +    
                '<div class="caseStudy_img">' +
                    '<h3 style="margin-top: 0;">After</h3>' +
                    '<img class="frame" src="images/portfolio/raz/quiz-after.png" />' +
                    '<img class="frame" src="images/portfolio/raz/quiz-after2.png" />' +
                '</div>' +
            '</div>' +
        '</div>' +


        '<div class="caseStudy_section">' +
            '<h2 style="margin-bottom: 0;">eBook Tools</h2>' +
            '<p style="margin-top: 0;">New drawing tools were introduced, as well as a redesigned recorder converted from Flash to HTML5, a word journal, vocabulary tool, highlighting, and notes.</p>' +
            
            '<hr />' +
            
            '<h3>Sketch</h3>' +
            
            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/ebooktools-sketch.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/ebooktools-sketch2.png" />' +
                '</div>' +
            '</div>' +

            '<hr />' +

            '<h3>Design & Develop</h3>' +

            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/bookReader-toolbar.png" />' +
                '</div>' +
            '</div>' +
            
            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/bookReader-tools3.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/bookReader-tools2.png" />' +
                '</div>' +
            '</div>' +
            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/bookReader-tools.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/bookReader-tools4.png" />' +
                    
                '</div>' +
            '</div>' +

            '<hr />' +

            '<h3>Refactor & Document</h3>' +
            '<p>Code for the toolbar was repeated and modified in different ways for slightly different use cases. The full code for the toolbar needed to be cleaned up and documented in one place for future reference.</p>' +

            '<div class="caseStudy_img">' +
                '<img class="frame" src="images/portfolio/raz/bookReader-toolbar-notes.png" />' +
            '</div>' +

            '<img class="frame" src="images/portfolio/raz/bookTools-document.png" />' +
        '</div>' +


        '<div class="caseStudy_section">' +
            '<h2>Book Builder</h2>' +
            '<p>The book builder needed to be converted from Flash to HTML5, and redesigned to incorporate new visual elements and interactive features.</p>' +

            '<hr />' +

            '<h3>Plan, Sketch, Design, Iterate</h3>' +

            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/bookBuilder-notes.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/bookBuilder-sketch.png" />' +
                '</div>' +
            '</div>' +

            '<img class="frame" src="images/portfolio/raz/bookBuilder-notes3.png" />' +
            '<img class="frame" src="images/portfolio/raz/bookBuilder-notes2.png" />' +

            '<hr />' +

            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/bookBuilder-text.png" />' +
                    '<img class="frame" src="images/portfolio/raz/bookBuilder-img.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/bookBuilder-tools.png" />' +
                '</div>' +
            '</div>' +
            
            '<div style="align-items: start;" class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<h3 style="margin-top: 0;">Before</h3>' +
                    '<img class="frame" src="images/portfolio/raz/bookBuilder-before2.png" />' +
                    '<img class="frame" src="images/portfolio/raz/bookBuilder-before.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<h3 style="margin-top: 0;">After</h3>' +
                    '<img class="frame" src="images/portfolio/raz/bookBuilder4.png" />' +
                    '<img class="frame" src="images/portfolio/raz/bookBuilder3.png" />' +
                '</div>' +
            '</div>' +
        '</div>' +


        '<div class="caseStudy_section">' +
            '<h2>Book Room</h2>' +
            '<p>The book room needed a complete redesign, but before then, it needed a refresh to bring it in line with all of the other redesigned activities.</p>' +
            
            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<h3>Before</h3>' +
                    '<img class="frame" src="images/portfolio/raz/bookroom-before.png" />' +
                '</div>' +    
                '<div class="caseStudy_img">' +
                    '<h3>After</h3>' +
                    '<img class="frame" src="images/portfolio/raz/bookroom-current2.png" />' +
                '</div>' +
            '</div>' +

            '<hr />' +

            '<h2>Redesign</h2>' +
            '<h3>Research</h3>' +
            '<div class="caseStudy_row caseStudy_row-images">' +
                '<img class="frame" src="images/portfolio/raz/bookroom-inspiration.png" />' +
            '</div>' +

            '<hr />' +

            '<h3>Ideation</h3>' +
            '<div class="caseStudy_row caseStudy_row-images">' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/bookroom-sketch3.png" />' +
                '</div>' +
                '<div class="caseStudy_img">' +
                    '<img class="frame" src="images/portfolio/raz/bookroom-sketch2.png" />' +
                '</div>' +
            '</div>' +

            '<img class="frame" src="images/portfolio/raz/bookroom-sketch.png" />' +

        '</div>' +

        '<div class="caseStudy_section">' +
            '<div class="caseStudy_row">' +
                '<div class="caseStudy_headingContainer">' +
                    '<h2>Outcome</h2>' +
                '</div>' +
                '<div class="caseStudy_content">' +
                    '<p>The Kids A-Z Student Portal underwent an entire redesign which was a huge achievement! As with most projects, there is much left to be done, and a whole new redesign is already underway by the talented illustrators at Learning A-Z. I\'m proud to have been able to contribute to the talent behind the student interface.</p>' +
                '</div>' +
            '</div>' +
        '</div>'
});
portfolio.push ({
    //thumbPublic: 'cs/p3-blurred.jpg',
    thumbPublic: 'cs/p3.jpg',
    /*contentPublic:
        '<h2 class="galleryContent_description">Web UI/UX Design</h2>' +
        '<img src="images/portfolio/cs/p3-blurred.jpg" />',*/
    contentPublic:
        '<h2 class="galleryContent_description">UX Design</h2>' +
        '<img src="images/portfolio/cs/p3.jpg" />'
});
portfolio.push ({
    //thumbPublic: 'cs/p1-blurred.jpg',
    thumbPublic: 'cs/p1.jpg',
    /*contentPublic:
        '<h2 class="galleryContent_description">Responsive Web Design, Sitefinity Integration</h2>' +
        '<img src="images/portfolio/cs/p1-blurred.jpg" />',*/
    contentPublic:
        '<h2 class="galleryContent_description">UX and Responsive Design, Sitefinity Integration</h2>' +
        '<img src="images/portfolio/cs/p1.jpg" />'
});
portfolio.push ({
    //thumbPublic: 'cs/p2-blurred.jpg',
    thumbPublic: 'cs/p2.jpg',
    /*contentPublic:
        '<h2 class="galleryContent_description">Web Design, Wordpress Theme Development, Project Management</h2>' +
        '<img src="images/portfolio/cs/p2-blurred.jpg" />',*/
    contentPublic:
        '<h2 class="galleryContent_description">Design, Wordpress Theme Development, Project Management</h2>' +
        '<img src="images/portfolio/cs/p2.jpg" />'
});

portfolio.push ({
    //thumbPublic: 'cs/p4-blurred.jpg',
    thumbPublic: 'cs/p4.jpg',
    /*contentPublic:
        '<h2 class="galleryContent_description">Web UI Design, Sitefinity Integration, Project Management, e-commerce, Responsive Design</h2>' +
        '<img src="images/portfolio/cs/p4-blurred.jpg" />',*/
    contentPublic:
        '<h2 class="galleryContent_description">Design, Sitefinity Integration, Project Management, e-commerce, Responsive Design</h2>' +
        '<img src="images/portfolio/cs/p4.jpg" />'
});

portfolio.push ({
    //thumbPublic: 'cs/p7-blurred.jpg',
    thumbPublic: 'cs/p7.jpg',
    /*contentPublic:
        '<h2 class="galleryContent_description">Responsive Web Design, Wordpress Theme Development</h2>' +
        '<img src="images/portfolio/cs/p7-blurred.jpg" />',*/
    contentPublic:
        '<h2 class="galleryContent_description">Responsive Web Design, Wordpress Theme Development</h2>' +
        '<img src="images/portfolio/cs/p7.jpg" />'
});
portfolio.push ({
    //thumbPublic: 'cs/p6-blurred.jpg',
    thumbPublic: 'cs/p6.jpg',
    /*contentPublic:
        '<h2 class="galleryContent_description">Responsive Web Design, Wordpress Theme Development</h2>' +
        '<img src="images/portfolio/cs/p6-blurred.jpg" />',*/
    contentPublic:
        '<h2 class="galleryContent_description">Responsive Web Design, Wordpress Theme Development</h2>' +
        '<img src="images/portfolio/cs/p6.jpg" />'
});
portfolio.push ({
    thumbPublic: 'loomAndMill.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">UI/UX Responsive Web Design, Magento Development</h2>' +
        '<img src="images/portfolio/loomAndMill.jpg" />'
});

portfolio.push ({
    thumbPublic: 'lot76NYC.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">Web Design, Custom Wordpress Theme Development</h2>' +
        '<img src="images/portfolio/lot76NYC.jpg" />'
});
portfolio.push ({
    thumbPublic: 'practicalBA.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">Web Design, Custom Wordpress Theme Development</h2>' +
        '<img src="images/portfolio/practicalBA.jpg" />'
});
portfolio.push ({
    thumbPublic: 'creativeHeads.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">UI/UX Design, HTML/CSS, ASP.NET Integration</h2>' +
        '<img src="images/portfolio/creativeHeads.jpg" />'
});

portfolio.push ({
    thumbPublic: 'snapKnot.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">UI Design, HTML/CSS, PHP integration</h2>' +
        '<img src="images/portfolio/snapKnot.jpg" />'
});
portfolio.push ({
    thumbPublic: 'LHI.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">Web Design, Drupal Integration</h2>' +
        '<img src="images/portfolio/LHI.jpg" />'
});
portfolio.push ({
    thumbPublic: 'rittenhouseNeedlepoint.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">Web Design, HTML/CSS, Magento Integration</h2>' +
        '<img src="images/portfolio/rittenhouseNeedlepoint.jpg" />'
});

portfolio.push ({
    //thumbPublic: 'cs/p5-blurred.jpg',
    thumbPublic: 'cs/p5.jpg',
    /*contentPublic:
        '<h2 class="galleryContent_description">Responsive Web Design, Wordpress Theme Development</h2>' +
        '<img src="images/portfolio/cs/p5-blurred.jpg" />',*/
    contentPublic:
        '<h2 class="galleryContent_description">Responsive Web Design, Wordpress Theme Development</h2>' +
        '<img src="images/portfolio/cs/p5.jpg" />'
});
portfolio.push ({
    thumbPublic: 'ss/p1.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">Web Design, Adobe Business Catalyst Integration</h2>' +
        '<img src="images/portfolio/ss/p1.jpg" />'
});
portfolio.push ({
    thumbPublic: 'ss/p2.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">Web Design, HTML/CSS Development</h2>' +
        '<img src="images/portfolio/ss/p2.jpg" />'
});
portfolio.push ({
    thumbPublic: 'ss/p3.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">Web Design, HTML/CSS Development</h2>' +
        '<img src="images/portfolio/ss/p3.jpg" />'
});
portfolio.push ({
    thumbPublic: 'ss/p4.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">Web Design, Adobe Business Catalyst Integration</h2>' +
        '<img src="images/portfolio/ss/p4.jpg" />'
});
portfolio.push ({
    thumbPublic: 'ss/p5-c.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">Web Design, HTML/CSS</h2>' +
        '<img src="images/portfolio/ss/p5-c.jpg" />'
});

portfolio.push ({
    thumbPublic: 'remository.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">UI Design</h2>' +
        '<img src="images/portfolio/remository.jpg" />'
});
portfolio.push ({
    thumbPublic: 'MTK.jpg',
    contentPublic:
        '<h2 class="galleryContent_description">Web Design, HTML/CSS Develpment</h2>' +
        '<img src="images/portfolio/MTK.jpg" />'
});