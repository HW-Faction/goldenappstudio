import React from "react";
import './Contact.css'
export default function Contact () {
  
   
        return (
            <div>
                <section class="main-signup-heading">
                    <div class="container">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-12 py-3">
                                <h1 class="latoBlack text-white heading">Let's Get Started.</h1>
                                <p class="latoRegular text-white description">
                                    We'd love to know how we can help you. <br />
                                    Share a summary of your project below, and we'll get in touch
                                    with you soon.
              </p>
                            </div>
                        </div>
                    </div>
                </section>
          
                <div class="sign-up my-5">
                    <div class="container  align-items-center">
                        <div class="row">
                            <div class="col-lg-12">
                                <form method="post" id="signup-form">
                                    <input type="hidden" name="_token" value="x04nEEd54DB5FMLFyGPqdoWvDn8Ahd2COXfgqaxn" />
                                    <div class="row">

                       
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label class="form-label" for="signupName">Full Name*</label>
                                                <input type="text" name="firstname" class="form-input form-control" id="signupName" required="" />
                                            </div>
                                        </div>
                       
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label class="form-label" for="signupCompanyName">Company*</label>
                                                <input type="text" name="company_name" class="form-input form-control" id="signupCompanyName" required="" />
                                            </div>
                                        </div>
                      
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label class="form-label" for="signupLastName">Email Address*</label>
                                                <input type="email" name="email" class="form-input form-control" id="signupEmail" required="" />
                                            </div>
                                        </div>
                      
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label class="form-label" for="signupPhone">Phone Number</label>
                                                <input type="text" name="phone" class="form-input form-control" id="signupPhone" />
                                            </div>
                                        </div>
                   
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label class="form-label" for="projectName">What's the name of your project?</label>
                                                <input type="text" name="projectName" class="form-input form-control" id="projectName" />
                                            </div>
                                        </div>
                       
                                        <div class="col-lg-12 mt-4">
                                            <div class="form-group ">
                                                <div class="margins description text-left">What do you want to create?</div>
                                                <div class="multiple-select" data-select-id="platforms">
                                                    <div class="select-item  values" data-item-value="1">Web App</div>
                                                    <div class="select-item  values" data-item-value="2">Mobile App</div>
                                                    <div class="select-item  values" data-item-value="3">Feedback</div>
                                                </div>
                                            </div>
                                        </div>
                      
                                        <div class="col-12 mt-2">
                                            <div class="form-group">
                                                <label class="form-label" for="projectDescription">Tell us briefly about your project*</label>
                                                <input type="text" name="projectDescription" class="form-input form-control" id="projectDescription" />
                                            </div>
                                        </div>
                       
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label class="form-label" for="industryName">
                                                    Which industry/vertical/domain does your project belong to? (e.g. Games, AR/VR)*
                                </label>
                                                <input type="text" name="projectDomain" class="form-input form-control" id="projectDomain" placeholder="(e.g. Games, AR/VR, HealthTech, EdTech)" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label class="form-label" for="projectStage">
                                                    What stage is your project currently at?*
                                    </label>
                                                <div id="projectStage-border">
                                                    <select name="projectStage" id="projectStage" class="form-control footer-input source-input-select" id="projectStage" >
                                                        <option disabled selected >Project Stage</option>
                                                        <option value="It's in the idea phase and hasn't been scoped out yet">
                                                            It's in the idea phase and hasn't been scoped out yet
                                            </option>
                                                        <option style={{ fontSize: '18px' }} value="It's clearly defined but we haven't started production yet">
                                                            It's clearly defined but we haven't started production yet
                                            </option>
                                                        <option value="We're already working on it but need to accelerate the pace with the help of additional team members">
                                                            We're already working on it but need to accelerate the pace with the help of additional team members
                                            </option>
                                                        <optgroup label=""></optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <div class="margins description text-left">What services do you require?</div>
                                                <div class="multiple-select" data-select-id="services">
                                                    <div class="select-item values" data-item-value="1">Engineering</div>
                                                    <div class="select-item values" data-item-value="2">UI Design</div>
                                                    <div class="select-item values" data-item-value="3">Quality Assurance</div>
                                                    <div class="select-item values" data-item-value="4">UX Design</div>
                                                    <div class="select-item values" data-item-value="5">Project Management</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label class="form-label" for="projectReference">
                                                    Please share examples of similar apps that inspire you. Having this information would help us in matching you to a team that has relevant expertise
                                    </label>
                                                <input type="text" name="projectReference" class="form-input form-control" id="projectReference" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3 mt-4">
                                            <label class="form-label">What's your expected budget?</label>
                                            <h1 class="description latoItalic text-left" style={{ marginBottom: "10px" }}>Our clients typically fall into four categories:<strong> Less than $50K</strong>, <strong> $50K - $200K</strong>, <strong> $200K - $500K</strong>, <strong> $500K and above</strong>
                                            </h1>
                                            <p class="description margins text-left">
                                                If any of the following options resonate with your expected budget, kindly specify below
                            </p>
                                            <div class="form-group text-left" style={{ marginTop: "10px" }}>
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input name="project_budget" class="form-check-input" type="radio" id="signupNewProjectBudget1" value="Less than $50K" />
                                                        Less than ₹50K
                                    </label>
                                                    <i class="fa fa-question-circle-o ml-2 "> </i>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input name="project_budget" class="form-check-input" type="radio" id="signupNewProjectBudget2" value="$50K - $200K" />
                                                        ₹50K - ₹200K
                                    </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input name="project_budget" class="form-check-input" type="radio" id="signupNewProjectBudget3" value="$200K - $500K" />
                                                        ₹200K - ₹500K
                                    </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input name="project_budget" class="form-check-input" type="radio" id="signupNewProjectBudget4" value="$500K and above" />
                                                        ₹500K and above
                                    </label>
                                                </div>
                                                <div class="text-note hidden mt-2" id="text-msg">
                                                    Note: Our projects are usually in the range of $50K to $1 Million. However, we do work on projects with budgets less than $50K if our teams feel passionate about them.
                                </div>

                                            </div>
                                        </div>
                       
                                        <div class="col-lg-12 mt-2">
                                            <div class="form-group">
                                                <label class="form-label" for="source">How did you hear about us? *</label>
                                                <select name="source" class="form-control" id="source" required="">
                                                    <option style={{ color: '#bbb2cc' }} value="">
                                                        None
                                    </option>
                                                    <option value="Google">Google</option>
                                                    <option value="Clutch.co">Clutch.co</option>
                                                    <option value="Referral/Word of Mouth">
                                                        Referral/Word of Mouth
                                    </option>
                                                    <option value="Twitter">Twitter</option>
                                                    <option value="Conference">Conference</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                     
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label class="form-label" for="Location">
                                                    Where are you based? (e.g. US, UK, Canada)
                                </label>
                                                <input type="text" name="Location" class="form-input form-control" id="Location" />
                                            </div>
                                        </div>

                                        <div class="col-12 text-left mt-3">
                                            <input type="checkbox" id="nda" name="nda" />
                                            Please send me a Non Disclosure Agreement for a Confidential Consultation
                        </div>

                                       
                                        <div class="col-12 text-center mt-2">
                                            <button id="contact-submit" class="btn btn-lg btn-success btn-width">Submit Details</button>
                                        </div>
                       
                                    </div>
                                </form>
                                <div class="col-lg-12">
                                    <div class="signup__success_message ">
                                        <div class="row">
                                            <div class="col-12">
                                                <i class="fa fa-check text-white mr-3"></i>
                                                <h2 class="latoBlack">Thank you!
					<div class="horizontal-line">
                                                    </div>
                                                </h2>
                                                <p class="latoRegular ">
                                                    Our Business Development team will in touch with you shortly
				</p>
                                                <p class="latoRegular">In the meantime, you can view our:<br />
                                                    <a href="https://www.tintash.com/services" class="latoRegular">Services
					<i class="pl-2 fa fa-arrow-right"></i>
                                                    </a>
                                                    <br />
                                                    <a href="https://www.tintash.com/portfolio" class="latoRegular">Portfolio
					<i class="pl-2 fa fa-arrow-right"></i>
                                                    </a>
                                                    <br />
                                                    <a href="https://www.tintash.com/verticals" class="latoRegular">Verticals
					<i class="pl-2 fa fa-arrow-right"></i>
                                                    </a>
                                                    <br />
                                                </p></div>
                                        </div>
                                    </div>                    <div class="signup__error proximaNovaLight">
                                        <i class="fa fa-check text-white mr-3"></i>
                                        Oops, we ran into an error, please try again.
</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
