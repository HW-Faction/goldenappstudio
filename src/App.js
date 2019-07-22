import React from "react";
import "./App.css";

import Header from "./components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;

/* 

<li class="menu-listing sub-menu"><a href="javascript:void(0);">Services</a>
                                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                                            <div class="our-services">
                                                <div class="inner-menu">
                                                    <div class="col-md-4">
                                                        <div class="wt-100">
                                                            <div class="ServicesTitle"><h4>Web</h4></div>
                                                            <ul>
                                                                <li>JavaScript Development</li>
                                                                <li class="ssub-menu">
                                                                    <a href="https://www.techuz.com/angular-js-development/">AngularJS</a>
                                                                    <a href="https://www.techuz.com/react-js-development/">ReactJS</a>
                                                                    <a href="https://www.techuz.com/node-js-development/">NodeJS</a>
                                                                    <a href="https://www.techuz.com/vue-js-development/">VueJS</a>
                                                                    <a href="https://www.techuz.com/meteor-development/">MeteorJS</a>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li><a href="https://www.techuz.com/web-development/">Web Development</a></li>
                                                                <li class="ssub-menu">
                                                                    <a href="https://www.techuz.com/php-web-development/">PHP</a>
                                                                    <a href="https://www.techuz.com/laravel-web-development/">Laravel</a>
                                                                    <a href="https://www.techuz.com/codeigniter-development/">Codeigniter</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="wt-100 mr-btm-85">
                                                            <div class="ServicesTitle"><h4>Mobile</h4></div>
                                                            <ul>
                                                                <li><a href="https://www.techuz.com/mobile-application-development/">Mobile Development</a></li>
                                                                <li class="ssub-menu">
                                                                    <a href="https://www.techuz.com/ios-app-development/">iOS</a>
                                                                    <a href="https://www.techuz.com/android-app-development/">Android</a>
                                                                    <a href="https://www.techuz.com/react-native-app-development/">React Native</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="wt-100">
                                                            <div class="ServicesTitle"><h4>Concept/Design</h4></div>
                                                            <ul>
                                                                <li class="ssub-menu">
                                                                    <a href="https://www.techuz.com/wireframe-prototype/">Wireframes/Prototyping</a>
                                                                    <a href="https://www.techuz.com/ui-development/">UI Design</a>
                                                                    <a href="https://www.techuz.com/responsive-web-design/">Responsive Design</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="wt-100 mr-btm-100">
                                                            <div class="ServicesTitle"><h4>Cloud</h4></div>
                                                            <ul class="padding-none">
                                                                <li class="ssub-menu">
                                                                    <a href="https://www.techuz.com/aws-cloud-services/">AWS</a>
                                                                    <a href="https://www.techuz.com/google-cloud-services/">Google Cloud</a>
                                                                    <a href="https://www.techuz.com/aws-lambda-services/">AWS Lambda</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="wt-100">
                                                            <div class="ServicesTitle"><h4>Trending</h4></div>
                                                            <ul class="padding-none">
                                                                <li class="ssub-menu">
                                                                    <a href="https://www.techuz.com/iot-application-development/">IoT</a>
                                                                    <a href="https://www.techuz.com/chatbot-development/">Chatbot</a>
                                                                    <a href="https://www.techuz.com/blockchain-development/">Blockchain</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

*/
