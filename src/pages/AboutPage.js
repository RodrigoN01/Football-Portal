const AboutPage = () => {
  return (
    <div className='about'>
      <h3 className='about__title'>ABOUT US</h3>
      <div className='about__info'>
        <h1>Football Portal </h1>
        <div>
          <p>Football Portal v(1.0)</p>
          <p>
            A simple application that displays football competitions and teams
            information from an external API
          </p>
          <ul>
            <li>Technologies used:</li>
            <li>ReactJS</li>
            <li>useContext</li>
            <li>useReducer</li>
            <li>useState</li>
            <li>FetchAPI</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
