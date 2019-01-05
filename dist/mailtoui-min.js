/**
 * mailtoui - A convenient drop-in user interface for mailto links.
 * @version v0.1.9
 * @link https://mailtoui.com
 * @author Mario Rodriguez - https://twitter.com/mariordev
 * @license MIT
 */
var mailtouiApp=mailtouiApp||{};!function(n){var e=null,t=null,o=new Object;o.linkClass="mailtoui",o.autoClose=!0,n.buildStyleTag=function(){var e=window.document.createElement("style"),t="\n            .mailtoui-modal {\n                background-color: rgb(0,0,0);\n                background-color: rgba(0,0,0,0.4);\n                bottom: 0;\n                color: #303131;\n                display: none;\n                height: 100%;\n                left: 0;\n                margin: 0;\n                padding: 0;\n                position: fixed;\n                right: 0;\n                top: 0;\n                width: 100%;\n                z-index: 1000;\n            }\n\n            .mailtoui-modal-content {\n                -webkit-animation: appear 0.4s;\n                animation: appear 0.4s;\n                background-color: #F1F5F8;\n                border-radius: 8px;\n                bottom: auto;\n                -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n                left: 50%;\n                max-height: calc(100% - 100px);\n                overflow: hidden;\n                padding: 0;\n                position: fixed;\n                right: -45%;\n                top: 50%;\n                -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n            }\n\n            .mailtoui-modal-content:hover,\n            .mailtoui-modal-content:focus {\n                overflow-y: auto;\n            }\n\n            /* Small devices, tablets */\n            @media only screen and (min-width : 768px) {\n                .mailtoui-modal-content {\n                    right: auto;\n                }\n            }\n\n            .mailtoui-modal-head {\n                background-color: #fff;\n                clear: both;\n                padding: 20px;\n            }\n\n            .mailtoui-modal-title {\n                font-size: 100%;\n                font-weight: bold;\n                margin: 0;\n                padding: 0;\n            }\n\n            .mailtoui-modal-close {\n                color: #aaa;\n                float: right;\n                font-size: 38px;\n                font-weight: bold;\n                position: relative;\n                top: -12px;\n            }\n\n            .mailtoui-modal-close:hover,\n            .mailtoui-modal-close:focus {\n                color: black;\n                cursor: pointer;\n                text-decoration: none;\n            }\n\n            .mailtoui-modal-body {\n                height: 100%;\n                padding: 20px;\n            }\n\n            .mailtoui-client {\n                color: #333;\n                outline: none;\n                text-decoration: none;\n            }\n\n            .mailtoui-client:focus .mailtoui-label {\n                background-color: #555;\n                color: #fff;\n            }\n\n            .mailtoui-label {\n                background-color: #fff;\n                border-radius: 100px;\n                -webkit-box-shadow: 0px 2px 4px rgba(0,0,0,0.18);\n                box-shadow: 0px 2px 4px rgba(0,0,0,0.18);\n                margin-bottom: 20px;\n                padding: 20px 30px;\n            }\n\n            .mailtoui-label:hover {\n                background-color: #555;\n                color: #fff;\n            }\n\n            .mailtoui-client:last-child .mailtoui-label {\n                margin-bottom: 0;\n            }\n\n            .mailtoui-label-icon {\n                font-weight: bold;\n                position: relative;\n                top: 4px;\n            }\n\n            .mailtoui-label-text {\n                margin-left: 5px;\n            }\n\n            .mailtoui-copy {\n                margin-top: 20px;\n                position: relative;\n            }\n\n            .mailtoui-copy-button {\n                background-color: #fff;\n                -webkit-box-shadow: 0px 2px 4px rgba(0,0,0,0.18);\n                box-shadow: 0px 2px 4px rgba(0,0,0,0.18);\n                border-radius: 100px;\n                bottom: 21px;\n                border: none;\n                color: #303131;\n                font-size: 100%;\n                height: 63px;\n                left: 0;\n                outline: none;\n                position: absolute;\n                top: 0;\n                width: 100px;\n            }\n\n            .mailtoui-copy-button:hover,\n            .mailtoui-copy-button:focus {\n                background-color: #555;\n                color: #fff;\n                cursor: pointer;\n                outline: none;\n            }\n\n            .mailtoui-copy-email-address {\n                background-color: #d8dcdf;\n                border-radius: 100px;\n                border: none;\n                -webkit-box-sizing : border-box;\n                box-sizing : border-box;\n                color: #48494a;\n                font-size: 100%;\n                outline: none;\n                padding: 20px 30px 20px 120px;\n                width: 100%;\n            }\n\n            .mailtoui-is-hidden {\n                display: none;\n                visibility: hidden;\n            }\n\n            @-webkit-keyframes appear {\n                0% {\n                    opacity: 0;\n                    -webkit-transform: translate(-50%, -50%) scale(0,0);\n                    transform: translate(-50%, -50%) scale(0,0);\n                }\n                100% {\n                    opacity: 1;\n                    -webkit-transform: translate(-50%, -50%) scale(1,1);\n                    transform: translate(-50%, -50%) scale(1,1);\n                }\n            }\n\n            @keyframes appear {\n                0% {\n                    opacity: 0;\n                    -webkit-transform: translate(-50%, -50%) scale(0,0);\n                    transform: translate(-50%, -50%) scale(0,0);\n                }\n                100% {\n                    opacity: 1;\n                    -webkit-transform: translate(-50%, -50%) scale(1,1);\n                    transform: translate(-50%, -50%) scale(1,1);\n                }\n            }\n        ";return t=t.replace(/mailtoui/g,n.prefix()),e.type="text/css",e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t)),e},n.embedStyleTag=function(){var e=window.document.head.firstChild;window.document.head.insertBefore(n.buildStyleTag(),e)},n.buildModal=function(e){var t=e.id,o=n.getEmail(e),i=n.getLinkSchemeField(e,"subject"),l=n.getLinkSchemeField(e,"cc"),a=n.getLinkSchemeField(e,"bcc"),r=n.getLinkSchemeField(e,"body"),c=window.document.createElement("div"),s='<svg viewBox="0 0 24 24" width="24" height="24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentColor" stroke="currentColor"><path data-cap="butt" data-color="color-2" fill="none" stroke-miterlimit="10" d="M5.704,2.979 c0.694,0.513,1.257,1.164,1.767,2.02C7.917,5.746,8.908,7.826,8,9c-1.027,1.328-4,1.776-4,3c0,0.921,1.304,1.972,2,3 c1.047,1.546,0.571,3.044,0,4c-0.296,0.496-0.769,0.92-1.293,1.234" stroke-linecap="butt"/> <path data-cap="butt" data-color="color-2" fill="none" stroke-miterlimit="10" d="M20.668,5.227 C18.509,6.262,15.542,6.961,15,7c-1.045,0.075-1.2-0.784-2-2c-0.6-0.912-2-2.053-2-3c0-0.371,0.036-0.672,0.131-0.966" stroke-linecap="butt"/> <circle fill="none" stroke="currentColor" stroke-miterlimit="10" cx="12" cy="12" r="11"/> <path data-cap="butt" data-color="color-2" fill="none" stroke-miterlimit="10" d="M19.014,12.903 C19.056,15.987,15.042,19.833,13,19c-1.79-0.73-0.527-2.138-0.986-6.097c-0.191-1.646,1.567-3,3.5-3S18.992,11.247,19.014,12.903z" stroke-linecap="butt"/></g></svg>',d=`\n            <div class="mailtoui-modal-content">\n                <div class="mailtoui-modal-head">\n                    <span id="mailtoui-modal-close-${t}" class="mailtoui-modal-close">&times</span>\n                    <span class="mailtoui-modal-title">Compose new email with</span>\n                </div>\n                <div class="mailtoui-modal-body">\n                    <div class="mailtoui-clients">\n                        <a id="mailtoui-client-${t}" class="mailtoui-client" href="https://mail.google.com/mail/?view=cm&fs=1&to=${o}&su=${i}&cc=${l}&bcc=${a}&body=${r}" target="_blank">\n                            <div class="mailtoui-label">\n                                <span class="mailtoui-label-icon">${s}</span>\n                                <span class="mailtoui-label-text">Gmail in browser</span>\n                            </div>\n                        </a>\n\n                        <a id="mailtoui-client-${t}" class="mailtoui-client" href="https://outlook.office.com/owa/?path=/mail/action/compose&to=${o}&subject=${i}&body=${r}" target="_blank">\n                            <div class="mailtoui-label">\n                                <span class="mailtoui-label-icon">${s}</span>\n                                <span class="mailtoui-label-text">Outlook in browser</span>\n                            </div>\n                        </a>\n\n                        <a id="mailtoui-client-${t}" class="mailtoui-client" href="https://compose.mail.yahoo.com/?to=${o}&subject=${i}&cc=${l}&bcc=${a}&body=${r}" target="_blank">\n                            <div class="mailtoui-label">\n                                <span class="mailtoui-label-icon">${s}</span>\n                                <span class="mailtoui-label-text">Yahoo in browser</span>\n                            </div>\n                        </a>\n\n                        <a id="mailtoui-client-${t}" class="mailtoui-client" href="mailto:${o}?subject=${i}&cc=${l}&bcc=${a}&body=${r}">\n                            <div class="mailtoui-label">\n                                <span class="mailtoui-label-icon"><svg viewBox="0 0 24 24" xml:space="preserve" width="24" height="24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentColor" stroke="currentColor"><line data-color="color-2" fill="none" stroke-miterlimit="10" x1="5" y1="6" x2="6" y2="6"/> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="10" y1="6" x2="11" y2="6"/> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="15" y1="6" x2="19" y2="6"/> <line fill="none" stroke="currentColor" stroke-miterlimit="10" x1="1" y1="10" x2="23" y2="10"/> <rect x="1" y="2" fill="none" stroke="currentColor" stroke-miterlimit="10" width="22" height="20"/></g></svg></span>\n                                <span class="mailtoui-label-text">Default email app</span>\n                            </div>\n                        </a>\n                    </div>\n\n                    <div class="mailtoui-copy ${n.hideCopyUI(o)}">\n                        <button id="mailtoui-copy-button-${t}" class="mailtoui-copy-button" data-copytargetid="mailtoui-copy-email-address-${t}">Copy</button>\n                        <input id="mailtoui-copy-email-address-${t}" class="mailtoui-copy-email-address" type="text" value="${o}" readonly>\n                    </div>\n                </div>\n            </div>\n        `;return d=d.replace(/mailtoui/g,n.prefix()),c.id=n.prefix("-modal-"+t),c.className=n.prefix("-modal"),c.setAttribute("style","display: none;"),c.setAttribute("aria-hidden",!0),c.innerHTML=d,c},n.embedModal=function(e){var t=n.buildModal(e);window.document.getElementById(n.prefix("-modals")).appendChild(t)},n.embedAllModals=function(){var e=n.getLinks(),t=window.document.createElement("div"),o=window.document.body.firstChild;t.id=n.prefix("-modals"),t.className=n.prefix("-modals"),t.innerHTML="",window.document.body.insertBefore(t,o);for(var i=0;i<e.length;i++)n.embedModal(e[i])},n.getModal=function(e){if(null!==e)return window.document.getElementById(n.prefix("-modal-"+e.id))},n.openModal=function(o){o.preventDefault();var i=n.getParentAnchor(o.target);null!==i&&(t=document.activeElement,(e=n.getModal(i)).style.display="block",e.focusableChildren=Array.from(e.querySelectorAll('a[href], input:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])')),e.focusableChildren[0].focus(),n.hideModalFromScreenReader(!1))},n.closeModal=function(){null!==e&&(n.hideModalFromScreenReader(!0),e.style.display="none",e=null),null!==t&&t.focus()},n.hideModalFromScreenReader=function(t){var o=window.document.getElementById(n.prefix("-modals")).nextElementSibling;e.setAttribute("aria-hidden",t),o.setAttribute("aria-hidden",!t)},n.getParentAnchor=function(n){for(;null!==n;){if("A"===n.tagName.toUpperCase())return n;n=n.parentNode}return null},n.listenForEvents=function(){n.listenForClickOnLink(),n.listenForClickOnClient(),n.listenForClickOnCopy(),n.listenForClickOnClose(),n.listenForClickOnWindow(),n.listenForKeys()},n.listenForClickOnLink=function(){for(var e=window.document.getElementsByClassName(n.prefix()),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){n.openModal(e)},!1)},n.listenForClickOnClient=function(){if(!0===o.autoClose)for(var e=window.document.getElementsByClassName(n.prefix("-client")),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){null!==n.getParentAnchor(e.target)&&n.closeModal()},!1)},n.listenForClickOnCopy=function(){for(var e=window.document.getElementsByClassName(n.prefix("-copy-button")),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){n.copy(e)},!1)},n.listenForClickOnClose=function(){for(var e=window.document.getElementsByClassName(n.prefix("-modal-close")),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){n.closeModal()},!1)},n.listenForClickOnWindow=function(){window.addEventListener("click",function(e){var t=e.target;null!==t&&t.classList.contains(n.prefix("-modal"))&&n.closeModal()},!1)},n.listenForKeys=function(){window.document.addEventListener("keydown",function(e){n.escapeModal(e),n.trapTabWithinModal(e)},!1)},n.escapeModal=function(e){27===e.keyCode&&n.closeModal()},n.trapTabWithinModal=function(n){if(9===n.keyCode&&null!==e){var t=document.activeElement,o=e.focusableChildren.length,i=e.focusableChildren.indexOf(t);n.shiftKey?0===i&&(n.preventDefault(),e.focusableChildren[o-1].focus()):i==o-1&&(n.preventDefault(),e.focusableChildren[0].focus())}},n.getLinks=function(){return window.document.getElementsByClassName(n.prefix())},n.splitLinkScheme=function(n){var e=n.href.replace("mailto:","").trim(),t=e.split("?",1);return null!==t&&t.length>0&&(t[1]=e.replace(t[0]+"?","").trim()),t},n.getLinkSchemeField=function(e,t){var o=n.splitLinkScheme(e),i="",l=[],a=[];null!==o&&o.length>0&&(i=o[1]),null!==i&&i.length>0&&(l=(i=i.replace("%20&%20","%20%26%20")).split("&"));for(var r=0;r<l.length;r++){l[r]=l[r].replace("%20=%20","%20%3D%20"),a=l[r].split("=");for(var c=0;c<a.length;c++)if(a[0]==t)return a[1]}return""},n.getEmail=function(e){var t=n.splitLinkScheme(e),o="";return null!==t&&t.length>0&&(o=t[0]),decodeURIComponent(o)},n.hideCopyUI=function(e){return null==e||""==e.trim()?n.prefix("-is-hidden"):""},n.setCopyButtonText=function(n){n.innerHTML="Copied!",setTimeout(function(){n.innerHTML="Copy"},600)},n.copy=function(e){e.preventDefault();var t=e.target.getAttribute("data-copytargetid"),o=document.getElementById(t);navigator.userAgent.match(/ipad|iphone/i)?n.iOSCopy(o):(o.select(),document.execCommand("copy")),n.setCopyButtonText(e.target)},n.iOSCopy=function(n){var e=n.contentEditable,t=n.readOnly;n.contentEditable=!0,n.readOnly=!1;var o=document.createRange();o.selectNodeContents(n);var i=window.getSelection();i.removeAllRanges(),i.addRange(o),n.setSelectionRange(0,999999),document.execCommand("copy"),n.setSelectionRange(0,0),n.contentEditable=e,n.readOnly=t,i.removeAllRanges()},n.setOptions=function(){var n=document.getElementsByTagName("script"),e=n[n.length-1].getAttribute("data-options");if(null!==e&&e.trim().length>0)for(var t in e=JSON.parse(e),o)e.hasOwnProperty(t)&&(o[t]=e[t])},n.prefix=function(n=""){return o.linkClass+n},n.run=function(){n.setOptions(),n.embedAllModals(),n.embedStyleTag(),n.listenForEvents()}}(mailtouiApp),mailtouiApp.run();