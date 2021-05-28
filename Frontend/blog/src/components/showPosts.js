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
                <a href="https://www.transylvaniatrips.com/post/here-s-why-you-should-spend-your-autumn-in-transylvania">
                  <img
                    className="img-fluid text-left d-inline"
                    src="https://static.wixstatic.com/media/3c5446_cd9367845209481e92fb91456dbfebef~mv2_d_3992_2992_s_4_2.jpg/v1/fill/w_740,h_555,al_c,q_90/3c5446_cd9367845209481e92fb91456dbfebef~mv2_d_3992_2992_s_4_2.webp"
                    alt="Transfagarasan"
                    height="300"
                    width="300"
                  />
                </a>
              </div>
              <div className="images">
                <a href="https://www.transylvaniatrips.com/post/here-s-why-you-should-spend-your-autumn-in-transylvania">
                  <img
                    className="img-fluid text-left d-inline"
                    src="https://static.wixstatic.com/media/3c5446_3508578a79c44e8ba2e57d8bdf5a06a8~mv2_d_3992_2992_s_4_2.jpg/v1/fill/w_740,h_555,al_c,q_90/3c5446_3508578a79c44e8ba2e57d8bdf5a06a8~mv2_d_3992_2992_s_4_2.webp"
                    alt="Transfagarasan"
                    height="300"
                    width="300"
                  />
                </a>
              </div>
              <div className="images">
                <a href="https://www.transylvaniatrips.com/post/here-s-why-you-should-spend-your-autumn-in-transylvania">
                  <img
                    className="img-fluid text-left d-inline"
                    src="https://static.wixstatic.com/media/3c5446_ce492b9a60f14cf4995c506472339322~mv2_d_3652_2737_s_4_2.jpg/v1/fill/w_740,h_555,al_c,q_90/3c5446_ce492b9a60f14cf4995c506472339322~mv2_d_3652_2737_s_4_2.webp"
                    alt="Transfagarasan"
                    height="300"
                    width="300"
                  />
                </a>
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
            <h3>Dracula’s Castle and Brasov city</h3>
            <div className="img-fluid max-width: 100% height: auto">
              <div className="images">
                <a href="https://www.transylvaniatrips.com/post/here-s-why-you-should-spend-your-autumn-in-transylvania">
                  <img
                    className="img-fluid text-left d-inline"
                    src="https://static.wixstatic.com/media/3c5446_d889e8263c26436d9b5d5ebd9025304b~mv2_d_1920_1280_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/3c5446_d889e8263c26436d9b5d5ebd9025304b~mv2_d_1920_1280_s_2.webp"
                    alt="DraculaCastle"
                    height="300"
                    width="300"
                  />
                </a>
              </div>
              <div className="images">
                <a href="https://www.transylvaniatrips.com/post/here-s-why-you-should-spend-your-autumn-in-transylvania">
                  <img
                    className="img-fluid text-left d-inline"
                    src="https://static.wixstatic.com/media/3c5446_26a57db715164d41acca4f7bccc96937~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_740,h_493,al_c,q_90/3c5446_26a57db715164d41acca4f7bccc96937~mv2_d_5184_3456_s_4_2.webp"
                    alt="DraculaCastle"
                    height="400"
                    width="400"
                  />
                </a>
              </div>
              <div className="images">
                <a href="https://en.wikipedia.org/wiki/Bran_Castle">
                  <img
                    className="img-fluid text-left d-inline"
                    src="data:image/jpeg;base64,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"
                    alt="DraculaCastle"
                    height="300"
                    width="300"
                  />
                </a>
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
              <Link to={`/postDetails/${post.id}`}>
                <p key={index}>{post.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default ShowPosts;
