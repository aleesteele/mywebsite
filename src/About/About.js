import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
        console.log('inside About component');
        return (
            <div className="About">

            <div className="About-download">
                Want to see this in document-form? <a href="http://www.aleesteele.com/Anne-Lee-Steele-CV.pdf" className="About-download-link link anim-middleout" download="Anne-Lee-Steele-CV-2018.pdf">Click here.</a>
            </div>
            <b><h2 className="About-tagline">
                Research-driven.<br/>
                Communication-minded.<br/>
                Multidisciplinary skills.
            </h2></b>

            <b><h3>EDUCATION</h3></b>

            London School of Economics, University of London International Programme<br/>
            Graduate Diploma, Economics<br/>
            2017 - Current<br/>
            London, UK (Online)
            <p>
                <a href="http://www.londoninternational.ac.uk/courses/diploma-graduates/lse/diploma-graduates-economics"><i className="hover link anim-middleout">"Developed by academics at LSE, this diploma provides a strong grounding in economics and helps you to develop critical skills for a wide range of real world professional situations. It is designed for graduates looking for either a standalone qualification in economics or a foundation for postgraduate study."</i></a><br/>
            </p>
            <p>
                <u>Modules</u>: Macroeconomics, Microeconomics, International Economics, Elements of Econometrics<br/>
            </p>

            Columbia University in the City of New York<br/>
            B.A. Sociology, B.A. Anthropology<br/>
            2011 - 2017<br/>
            New York, USA
            <p>
                <i>Coursework focused on sustainable development, urbanization and cultural studies</i><br/>
                <u>Select Coursework:</u> Methods for Social Research, Global Urbanism, Social Theory, Political and Socioeconomic Dimensions of the Environment, Masterpieces of Western Literature and Philosophy, Earth Institute Practicum, Literary Texts and Criticism, Science for Sustainable Development, Urban Anthropology, The Ethnographic Imagination, Intro to Ethnic Studies
                <br/>
            </p>
            <p>
                <u>Select Organizations:</u> Undergraduate Committee on Global Thought, Columbia Photographers Association, EcoReps, Columbia Daily Spectator
            </p>
            <p>
                <u>Field Research Study Abroad</u>: <i>Environmental and Development Studies</i>. School for Field Studies, Spring 2017. Based at the Ugyen Wangchuck Institute for Conservation and Environmental Research (UWICER) in Bumthang, Bhutan. Participation fully funded by Columbia University and School For Field Studies.
            </p>
            <p>
                <u>Notable Projects:</u> <br/>
                • <i>"Mobility as Multi-Dimensional: Forest Governance at Wangchuck Centennial National Park and Beyond"</i>, final directed research project from semester-long field research program in Bhutan, presented to Royal Government of Bhutan officials, researchers and scientists (2017).<br/>
                • Used ArcGIS and Royal Government of Bhutan historical data to map evolution of national forest coverage, (2017).<br/>
                • <i>"Economic Empowerment or Environmental Impoverishment? Perspectives on the ‘War on Coal’"</i>. Analyzed presence of energy and mining industries on Native American reserv during multi-semester long project (2016). <br/>
                • <i>"Qualifying and Quantifying Media Bias: Reportage of Officially-Claimed ISIL Terrorist Attacks in Western Media, 2014-2016"</i>. Developed 'bias measures’ for reporting of major news outlets for semester long project (2016).<br/>
                • Investigated effects of mining on land and water bodies for "Expulsions" book by Sociologist Saskia Sassen (2016).<br/>
                • Tracked business growth and gentrification trends of Harlem using public records/Google Maps data (2015).<br/>
            </p>
            <p>
                <u>Select Publications</u><br/>
                • <i>"Investigating the Global and Local in Wangchuck Centennial National Park: A Case for the Bhutanese Conservation Actors In-Between"</i>. <a href="https://consiliencejournal.org/article/investing-the-global-and-local-in-wangchuck-centennial-national-park-a-case-for-the-bhutanese-conservation-actors-in-between/" className="About-link link anim-middleout">Published online in Consilience, the Journal of Sustainable Development, (2018)</a>.<br/>
                • <i>"Acknowledging the South and Ourselves"</i>. <a href="http://spc.columbiaspectator.com/2013/02/03/acknowledging-south%E2%80%94and-ourselves" className="About-link link anim-middleout">Published the Columbia Daily Spectator, (2013)</a>.<br/>
                • <i>"Moving Pictures"</i>. <a href="http://www.columbiaspectator.com/eye/2013/02/06/moving-pictures/" className="About-link link anim-middleout">Published in "The Eye" Magazine, (2013)</a>.<br/>
                • <i>"On the Venus of Willendorf and My Neighbor"</i>. Published in the print edition of art mag "The Point", Christchurch, NZ (2013).<br/>
                • <i>Anne Lee Steele Photography</i>. <a href="https://issuu.com/racingminds/docs/may2011/73" className="About-link link anim-middleout">Featured in Racing Minds Mag, (2011)</a>.
            </p>

            <h3><b>SKILLS SUMMARY</b></h3>
            <p className="About-bullets">
                • <u>Technical</u>: qualitative/quantitative data analysis, mapping (ArcGIS, Google Maps), Microsoft Suite<br/>
                • <u>Web-Development</u>: HTML5/CSS4/Javascript, jQuery, Frontend (React, Redux, Angular, Handlebars), Backend (Express, Node), RESTful APIs (Github, Twitter, News, Google Maps), Postgres, Redis, Media Queries, Three.js, Heroku, Content Management Systems (AWS, Wordpress), Data-types (json, csv/tsv/dsv, txt, sql, xml)<br/>
                • <u>Research</u>: interviewing, writing (academic/journalism/ethnographic), interviewing, literature review, field research<br/>
                • <u>Multimedia</u>: design (Adobe CS6/CC), video production (Final Cut Pro X/Premiere Pro)<br/>
                • <u>Marketing</u>: Google AdWords, SEO, social media, blogging<br/>
                • <u>Languages:</u> native English speaker, working knowledge of Korean, Spanish and German
            </p>

            <h3><b>EXPERIENCE</b></h3>
            <p className="About-bullets">
                • <u>United Nations High Commissioner for Refugees (UNHCR)</u> – <i>Staff Intern</i> – Madrid, Spain (2016)<br/>
                • <u>Dr. Saskia Sassen, Sociology Department, Columbia University</u> – <i>Research, General Assistant</i> – New York, USA (2015 - 2016)<br/>
                • <u>Undergraduate Recruitment Committee, Columbia University</u> – <i>Media Intern</i> – New York, USA (2014 - 2015)<br/>
                • <u>Rooftop Films</u> – <i>Seasonal Volunteer</i> – New York, USA (2014 - 2016)<br/>
                • <u>WGTN LUX Festival, Massey University</u> – <i>Production Assistant</i> – Wellington, New Zealand (2013)<br/>
                • <u>Elephant Valley Project</u> – <i>Conservation Volunteer</i> – Mondulkiri, Cambodia (2013)<br/>
                • <u>Halcyon Photography Magazine</u> – <i>Associate Editor</i> – New York, USA (2011 - 2012)<br/>
                • <u>Freelance</u> – <i>Self-Employed</i> – Hired for portraits, events, branding (2009 - Current)
            </p>

            <h3><b>OTHER CERTIFICATIONS / COURSES</b></h3>
            <p>
                • Spiced Academy of Code – Full-Stack Web Development – Berlin, Germany (2017)<br/>
                • School for Field Studies – Environmental & Development Studies – Bumthang, Bhutan (2017)<br/>
                • Nepal Mountaineering Association – Beginner Mountaineering Course – Manang Region, Nepal (2017)<br/>
                • American Red Cross – First Aid, CPR – New York, USA (2016)<br/>
                • N.O.L.S. Wilderness Medicine – Wilderness First Aid – New York, USA (2016)<br/>
                • P.A.D.I. Advanced Open Water Diving – Mancora, Peru (2015)<br/>
            </p>
        </div>);
    }
}

export default About;
