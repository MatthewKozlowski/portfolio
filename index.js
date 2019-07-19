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
                <li class="projectLists"><b>Project Title:</b> How Goat Are You?</li>
                <li class="projectLists"><b>Description:</b> A short quiz to determine if you are actually a goat that has learned how to use a computer.</li>
                <li class="projectLists"><b>Technologies:</b> Uses HTML, CSS, Javascript, jQuery</li>
                <li class="projectLists"><b>Repo: </b><a href="https://github.com/MatthewKozlowski/Quiz-App">Quiz App Repo</a></li>
                <li class="projectLists"><b>Live App: </b><a href="https://matthewkozlowski.github.io/Quiz-App/">How Goat Are You?</a></li>
            </div>

            <div id="worksWith" class="projectItems">
                <h2 class="projectInfoTitle">Playlist App</h2>
                <li class="projectLists"><b>Project Title:</b> Playlist Creator</li>
                <li class="projectLists"><b>Description:</b> An app that allows you to build and listen to a playlist of songs.</li>
                <li class="projectLists"><b>Technologies:</b> Uses HTML, CSS, Javascript, jQuery</li>
                <li class="projectLists"><b>Repo: </b><a href="https://github.com/MatthewKozlowski/Playlist">Playlist App Repo</a></li>
                <li class="projectLists"><b>Live App: </b><a href="https://matthewkozlowski.github.io/Playlist/">Playlist Creator</a></li>
            </div>

            <div id="interests" class="projectItems">
                <h2 class="projectInfoTitle">The Lantern</h2>
                <li class="projectLists"><b>Project Title:</b> The Lantern</li>
                <li class="projectLists"><b>Description:</b> A website created for a local classic movie theater.</li>
                <li class="projectLists"><b>Technologies:</b> Uses HTML, CSS, Javascript, jQuery</li>
                <li class="projectLists"><b>Repo: </b><a href="https://github.com/MatthewKozlowski/the-lantern">Playlist App Repo</a></li>
                <li class="projectLists"><b>Live App: </b><a href="https://matthewkozlowski.github.io/the-lantern/">The Lantern</a></li>
            </div>

        </div>`);
    })
}

function downloadResume() {
    $('#menu').on('click', '#resume', function(){
        
    });
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
