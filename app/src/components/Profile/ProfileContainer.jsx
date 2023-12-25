import React, { useId } from 'react';
import Profile from './Profile';
import axios, { isCancel, AxiosError } from 'axios';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from '../../api/api';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.router.params.userId;
        if (!userId) { userId = 2 };

        this.props.getUserProfile(userId);

    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />


            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, { getUserProfile })(withRouter(AuthRedirectComponent));
//export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);