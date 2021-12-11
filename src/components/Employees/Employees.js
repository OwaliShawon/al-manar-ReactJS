import React from 'react';
import "../Employees/Employees.css"

const Employees = () => {
    return (
        <section>
        <h1 className="m-5">Our Team</h1>
            <div class="container">
                <div class="row">
                    {/* Employee ONE */}
                    <div class="col-md-4">
                        <hr />
                        <div class="profile-card-2"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg" class="img img-responsive" />
                            <div class="profile-name">TANVIR AHMED</div>
                            <div class="profile-username">@johndoesurname</div>
                            <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
                        </div>
                    </div>
                    {/* Employee TWO */}
                    <div class="col-md-4">
                        <hr />
                        <div class="profile-card-2"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg" class="img img-responsive" />
                            <div class="profile-name">OWALI ULLAH SHAWON</div>
                            <div class="profile-username">@johndoesurname</div>
                            <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
                        </div>
                    </div>
                    {/* Employee THREE */}
                    <div class="col-md-4">
                        <hr />
                        <div class="profile-card-2"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg" class="img img-responsive" />
                            <div class="profile-name">JOHN DOE</div>
                            <div class="profile-username">@johndoesurname</div>
                            <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Employees;