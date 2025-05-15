pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        // splash wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        
        // Create container for styling
        var container = document.createElement('div');
        container.id = 'loading-container';
        splash.appendChild(container);
        
        // Create loading container for logo and progress
        var loadingContainer = document.createElement('div');
        loadingContainer.id = 'loading-flex-container';
        container.appendChild(loadingContainer);
        
        // Add logo container
        var logoDiv = document.createElement('div');
        logoDiv.id = 'logo-container';
        loadingContainer.appendChild(logoDiv);
        
        // Hard-code the exact path to the logo using the asset ID
        var logoImg = document.createElement('img');
        logoImg.id = 'logo-image';
        // Use the exact asset ID you provided
        logoImg.src = 'https://launch.playcanvas.com/api/assets/files/221170824/1/splat-reality-logo.png';
        logoImg.alt = 'SPLAT REALITY';
        logoImg.style.width = '150px';
        logoImg.style.height = 'auto';
        logoDiv.appendChild(logoImg);
        
        // Add a fallback in case the direct URL fails
        logoImg.onerror = function() {
            console.log("Failed to load logo from direct URL, using text fallback");
            logoImg.style.display = 'none';
            
            // Create text fallback logo
            var textLogo = document.createElement('div');
            textLogo.id = 'text-logo';
            textLogo.innerHTML = '<span style="color:#f47425; font-weight:bold; font-size:20px;">SPLAT</span> <span style="color:#ffffff; font-weight:bold; font-size:20px;">REALITY</span>';
            logoDiv.appendChild(textLogo);
        };
        
        // Progress container
        var progressContainer = document.createElement('div');
        progressContainer.id = 'progress-container';
        loadingContainer.appendChild(progressContainer);
        
        // Progress label
        var progressLabel = document.createElement('div');
        progressLabel.id = 'progress-label';
        progressContainer.appendChild(progressLabel);
        
        // Label text
        var labelText = document.createElement('span');
        labelText.textContent = 'Splattar din värld till liv...';
        progressLabel.appendChild(labelText);
        
        // Progress percentage
        var progressStatus = document.createElement('span');
        progressStatus.id = 'progress-percentage';
        progressStatus.textContent = '0%';
        progressLabel.appendChild(progressStatus);
        
        // Progress bar container
        var progressBarContainer = document.createElement('div');
        progressBarContainer.id = 'progress-bar-container';
        progressContainer.appendChild(progressBarContainer);
        
        // Progress bar
        var bar = document.createElement('div');
        bar.id = 'progress-bar';
        progressBarContainer.appendChild(bar);
        
        // Create loading state message
        var loadingState = document.createElement('div');
        loadingState.id = 'loading-state';
        loadingState.textContent = "Plockar upp virtuella färgburkar...";
        progressContainer.appendChild(loadingState);
        
        // Add bottom message
        var loadingMessage = document.createElement('div');
        loadingMessage.id = 'loading-message';
        loadingMessage.textContent = 'Låser upp portalen mellan din värld och vår...';
        container.appendChild(loadingMessage);
    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash-wrapper');
        if (splash) {
            // Fade out
            splash.style.transition = 'opacity 0.5s ease';
            splash.style.opacity = '0';
            
            // Remove after fade
            setTimeout(function() {
                if (splash && splash.parentElement) {
                    splash.parentElement.removeChild(splash);
                }
            }, 500);
        }
    };

    var setProgress = function (value) {
        var bar = document.getElementById('progress-bar');
        var percentage = document.getElementById('progress-percentage');
        var loadingState = document.getElementById('loading-state');
        
        if(bar) {
            value = Math.min(1, Math.max(0, value));
            var percent = Math.round(value * 100);
            bar.style.width = percent + '%';
            
            if (percentage) {
                percentage.textContent = percent + '%';
            }
            
            // Update loading message based on progress
            if (loadingState) {
                var message = "Plockar upp virtuella färgburkar...";
                
                if (percent <= 20) {
                    message = "Plockar upp virtuella färgburkar...";
                } else if (percent <= 50) {
                    message = "Råkade splatta på fel ställe, städar upp...";
                } else if (percent <= 75) {
                    message = "Datorn protesterar, förhandlar med processorn...";
                } else if (percent < 100) {
                    message = "Nästan klar! Bara en liten justering till...";
                } else {
                    message = "Redo att hoppa in!";
                    
                    // Update bottom message too
                    var bottomMessage = document.getElementById('loading-message');
                    if (bottomMessage) {
                        bottomMessage.textContent = "Färdigt, klart – dags att splatta loss!";
                    }
                }
                
                loadingState.textContent = message;
            }
        }
    };

    var createCss = function () {
        var css = [
            'body {',
            '    background-color: #0c1831;',
            '}',
            '',
            '#application-splash-wrapper {',
            '    position: fixed;',
            '    width: 100%;',
            '    height: 100%;',
            '    top: 0;',
            '    left: 0;',
            '    background-color: #0c1831;',
            '    z-index: 10000;',
            '    display: flex;',
            '    justify-content: center;',
            '    align-items: center;',
            '    font-family: Arial, sans-serif;',
            '    color: white;',
            '}',
            '',
            '#application-splash {',
            '    width: 100%;',
            '    height: 100%;',
            '    display: flex;',
            '    justify-content: center;',
            '    align-items: center;',
            '}',
            '',
            '#loading-container {',
            '    width: 80%;',
            '    max-width: 700px;',
            '}',
            '',
            '#loading-flex-container {',
            '    display: flex;',
            '    align-items: center;',
            '    margin-bottom: 40px;',
            '}',
            '',
            '#logo-container {',
            '    margin-right: 30px;',
            '    min-width: 150px;',
            '}',
            '',
            '#logo-image {',
            '    width: 150px;',
            '    height: auto;',
            '    max-width: 100%;',
            '}',
            '',
            '#text-logo {',
            '    margin-bottom: 10px;',
            '}',
            '',
            '#progress-container {',
            '    flex-grow: 1;',
            '    max-width: 60%;',
            '}',
            '',
            '#progress-label {',
            '    display: flex;',
            '    justify-content: space-between;',
            '    margin-bottom: 8px;',
            '    font-size: 14px;',
            '}',
            '',
            '#progress-percentage {',
            '    font-weight: bold;',
            '    color: #f47425;',
            '}',
            '',
            '#progress-bar-container {',
            '    width: 100%;',
            '    height: 10px;',
            '    background-color: rgba(255, 255, 255, 0.1);',
            '    border-radius: 5px;',
            '    overflow: hidden;',
            '    position: relative;',
            '}',
            '',
            '#progress-bar {',
            '    height: 100%;',
            '    background: linear-gradient(90deg, #f47425, #f47425);',
            '    width: 0%;',
            '    border-radius: 5px;',
            '    transition: width 0.3s ease;',
            '    position: relative;',
            '    animation: pulse 1.5s infinite;',
            '}',
            '',
            '#loading-state {',
            '    font-size: 14px;',
            '    color: rgba(255, 255, 255, 0.6);',
            '    font-style: italic;',
            '    margin-top: 8px;',
            '}',
            '',
            '#loading-message {',
            '    text-align: center;',
            '    font-size: 16px;',
            '    color: rgba(255, 255, 255, 0.7);',
            '    margin-top: 20px;',
            '}',
            '',
            '@keyframes pulse {',
            '    0% { opacity: 0.8; }',
            '    50% { opacity: 1; }',
            '    100% { opacity: 0.8; }',
            '}',
            '',
            '@media (max-width: 600px) {',
            '    #loading-flex-container {',
            '        flex-direction: column;',
            '    }',
            '    ',
            '    #logo-container {',
            '        margin-right: 0;',
            '        margin-bottom: 20px;',
            '    }',
            '    ',
            '    #logo-image {',
            '        width: 100px;',
            '    }',
            '    ',
            '    #progress-container {',
            '        max-width: 100%;',
            '    }',
            '}'
        ].join('\n');

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };

    createCss();
    showSplash();

    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);
});