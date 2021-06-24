import React from "react";
import { Link } from "react-router-dom";


const ShowPosts = (props) => {

  return (
    <div className="container">
      <div className="row">
        <div className=" leftcolumn img-fluid max-width: 100% height: auto">
          <div className="card">
            <h3>Reasons why you should visit Transylvania</h3>
          </div>
          <div className="card">
            <h3>Transfagarsan </h3>
            <div className="img-fluid max-width: 100% height: auto">
              <div className="images">
                <img
                  className="img-fluid text-left d-inline"
                  src="../pictures/transfagarasan4.jpg"
                  alt="Transfagarasan"
                  height="300"
                  width="300"
                />
              </div>
              <div className="images">
                <img
                  className="img-fluid text-left d-inline"
                  src="../pictures/transfagarasan3.jpg"
                  alt="Transfagarasan"
                  height="300"
                  width="300"
                />
              </div>
              <div className="images">
                <img
                  className="img-fluid text-left d-inline"
                  src="../pictures/transfagarasan4.webp"
                  alt="Transfagarasan"
                  height="300"
                  width="300"
                />
              </div>
            </div>
            <p>
              The Transfagarasan Highway is also known as the Transylvanian
              Alps’. And is the most amazing road you will see: it is a 90km
              paved mountain road crossing the southern section of the
              Carpathian Mountains of Romania.
            </p>
          </div>
          <div className="card">
            <a href="https://en.wikipedia.org/wiki/Bran_Castle" target="_blank">
              
              <h3>Dracula’s Castle and Brasov city</h3>
            </a>

            <div className="img-fluid max-width: 100% height: auto">
              <div className="images">
                <img
                  className="img-fluid text-left d-inline"
                  src="../pictures/3c5446_d889e8263c26436d9b5d5ebd9025304b_mv2_d_1920_1280_s_2.webp"
                  alt="DraculaCastle"
                  height="300"
                  width="300"
                />
              </div>
             
            </div>
            <p>
              Autumn is a colored season, but it is the Halloween and spicy
              pumpkin latte season as well. While the vampires may wander around
              for their prey, we cannot promise you any legendary meeting with
              them; But we can definitely assure you a visit in the famous
              Dracula’s Castle, a walk around the mountains and small villages
              for unforgettable landscapes and an amazing autumn foliage. After
              a castle visit, a stop in the heart of Transylvania, Brasov, is
              much needed and appreciated!
            </p>
          </div>
          <div className="card">
            <h3>The Best Music Festivals</h3>
            <h4>Electric Castle Festival</h4>
            <p>
              EC is one of the most beloved annual music event in Transylvania
              Romania! Imagine 5 days of music, fun, eclectic views and festival
              experience in a castle located in a tiny historic village! Even
              though the festival happens in Summer, most probably it is going
              to rain and people are always getting creative when it comes to
              mud, rain, dance and music. The festival managed to redefine the
              way people interact with a music festival, breaking the boundaries
              between electronic music and reggae, mainstream and subculture.
              So, if you want to mix art with music, with castles and great
              scenery while you are still near Cluj Napoca in Transylvania, just
              go to Electric Castle at the Bánffy Castle domain in Bonțida for
              an amazing music and art experience in a medieval castle!
            </p>
            <iframe
              width="900"
              height="620"
              src="https://www.youtube.com/embed/JQl6EvqMgpE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h4>Gărâna Jazz Festival, Gărâna</h4>
            <p>
              Gărâna is a 5-days jazz festival in the heart of the Western
              Carpathians, in the Semenic Mountains,1000 m above ground. The
              festival started as an improvised jazz session among close
              friends,in a small Transylvanian village up in the Semenic
              Mountains and now, more than 20 years later, is one of the most
              prestigious open-air jazz festival in Eastern and Central Europe.
              To quote the organisers of the festival: It’s not easy to get
              there, but, likewise Gărâna’s location, jazz music is all about
              unknown paths and great challenges. Instead of diminishing its
              appeal, the capricious climate and the special location seem to
              fuel the participants’ ambition to belong to the “chosen” ones
              that share the experience of wild music in wild settings.
            </p>
            <iframe
              width="900"
              height="620"
              src="https://www.youtube.com/embed/azWKdYDlbRo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h4>Untold Festival, Cluj-Napoca</h4>
            <p>
              4 days of Untold Festival in Transylvania and you will be part of
              the largest annual electronic music festival held in Romania and
              the Best Major Festival according to the European Festival Awards.
              This year you can get Wild with R.Williams, Martin Garrix, David
              Guetta, DV & LM, Bastille, Armin Van Buuren and more than 250
              artists in 4 days and 4 nights of magic in the city center of Cluj
            </p>
            <iframe
              width="900"
              height="620"
              src="https://www.youtube.com/embed/Vu8XG9UxtOQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h3>My Story</h3>
          </div>
          <div className="card">
            {props.show.map((post, index) => (
              <Link to={`/postDetails/${post._id}`}>
                <p key={index}>{post.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPosts;
