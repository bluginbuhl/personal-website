import React, { Component } from 'react';

class Skills extends Component {
    render() {

        if (this.props.data) {
            var skills = this.props.data.skills.map(function (skills) {
                return <li key={skills.name}>{skills.name}</li>
            })
        }

        return (
            <section id="skills">
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="bars">
                            <ul className="skills">{skills}</ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;