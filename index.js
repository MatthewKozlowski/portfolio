function goToBio() {
    $('#menuContainer').on('click', '#bio', function(){
        $('.hidden').removeClass('hidden');
        $('#menuContainer').remove();
        $('main').append(`
            <div id="bioContainer"> 
                
                <div id="background" class="bioItems">
                    <h2 class="bioInfoTitle">Background</h2>
                    <p id="backgroundText">I am originally from Illinois, now living in Des Moines, IA. I did a year in Denver before realizing I'm a midwesterner at heart and moved back. I did my undergraduate at Iowa State University. I graduated with an English degree, Secondary Education Certification, and ESL Endorsement. I taught for three years before deciding to make the switch to web development.</p>
                </div>

                <div id="worksWith" class="bioItems">
                    <h2 class="bioInfoTitle">Works With</h2>
                    <li class="worksWithList">CSS</li>
                    <li class="worksWithList">HTML</li>
                    <li class="worksWithList">JQuery</li>
                    <li class="worksWithList">Javascript</li>
                </div>
    
                <div id="interests" class="bioItems">
                    <h2 class="bioInfoTitle">Interests</h2>
                    <li class="interestsList">Reading</li>
                    <li class="interestsList">Video Games</li>
                    <li class="interestsList">Outdoor Activities</li>
                    <li class="interestsList">Dungeons and Dragons</li>
                </div>

            </div>`
        );
    })
}

function goToProjects() {
    $('#menuContainer').on('click', '#projects', function(){
        $('.hidden').removeClass('hidden');
        $('#menuContainer').remove();
        $('main').append(`
        <div id="projectContainer"> 
            
            <div id="quiz-app" class="projectItems">
                <h2 class="projectInfoTitle">Quiz App</h2>
                <p id="backgroundText">I am originally from Illinois, now living in Des Moines, IA. I did a year in Denver before realizing I'm a midwesterner at heart and moved back. I did my undergraduate at Iowa State University. I graduated with an English degree, Secondary Education Certification, and ESL Endorsement. I taught for three years before deciding to make the switch to web development.</p>
            </div>

            <div id="worksWith" class="bioItems">
                <h2 class="bioInfoTitle">Works With</h2>
                <li class="worksWithList">CSS</li>
                <li class="worksWithList">HTML</li>
                <li class="worksWithList">JQuery</li>
                <li class="worksWithList">Javascript</li>
            </div>

            <div id="interests" class="bioItems">
                <h2 class="bioInfoTitle">Interests</h2>
                <li class="interestsList">Reading</li>
                <li class="interestsList">Video Games</li>
                <li class="interestsList">Outdoor Activities</li>
                <li class="interestsList">Dungeons and Dragons</li>
            </div>

        </div>`);
    })
}

function downloadResume() {
    $('#menu').on('click', '#resume', function(){
        
    })
}

function goHome() {
    $('nav').on('click', '.home', function(){
        location.reload();
    })
}
goToBio();
goToProjects();
downloadResume();
goHome();
