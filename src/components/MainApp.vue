<template>
  <div>
    <header>
      <div class="logo-header d-flex">
        <div>
          <img class="logo" src="/assets/banner/logo.png" />
        </div>
        <div>
          <b-dropdown
            id="dropdown-right"
            right
            variant="outline-secondary"
            class="m-2"
          >
            <div class="header-dropdown-nav">
              <a href="#schedule-section" class="header-dropdown-nav-item"
                >Schedule</a
              >
              <a href="#venue-section" class="header-dropdown-nav-item"
                >Venue</a
              >
              <a href="#passes-section" class="header-dropdown-nav-item"
                >Passes</a
              >
              <a href="#artists-section" class="header-dropdown-nav-item"
                >Artists</a
              >
              <a href="#about-ptz-section" class="header-dropdown-nav-item"
                >About PTZ</a
              >
            </div>
          </b-dropdown>
        </div>
      </div>
      <div class="main-banner-container">
        <img class="main-banner-img" />
        <div class="main-banner-title">
          <div>
            <div>ZOUK IT UP</div>
            <div>WITH THE MASTERS</div>
          </div>
          <div class="main-banner-subtitle">
            <div class="main-banner-subtitle-date">2023 APRIL 14-15-16-17</div>
            <countdown :time="countdownTime()">
              <template slot-scope="props">
                <div class="countdown-clock">
                  <div class="countdown-time">
                    <div>
                      <div class="countdown-time-number">{{ props.days }}</div>
                      <div class="countdown-time-unit">days</div>
                    </div>
                    <div>
                      <div class="countdown-time-number">{{ props.hours }}</div>
                      <div class="countdown-time-unit">hours</div>
                    </div>
                    <div>
                      <div class="countdown-time-number">
                        {{ props.minutes }}
                      </div>
                      <div class="countdown-time-unit">minutes</div>
                    </div>
                    <div>
                      <div class="countdown-time-number">
                        {{ props.seconds }}
                      </div>
                      <div class="countdown-time-unit">seconds</div>
                    </div>
                  </div>
                </div>
              </template>
            </countdown>
          </div>
        </div>
        <div class="nav-bar">
          <a class="nav-bar-item" href="#schedule-section">Schedule</a>
          <a class="nav-bar-item" href="#venue-section">Venue</a>
          <a class="nav-bar-item" href="#passes-section">Passes</a>
          <a class="nav-bar-item" href="#artists-section">Artists</a>
          <a class="nav-bar-item" href="#about-ptz-section">About PTZ</a>
        </div>
      </div>
      <hr />
    </header>

    <body class="body-container">
      <div>
        <div class="quick-intro-section">
          <div>
            <div class="section-title">WELCOME TO HANOI!</div>
            <div class="quick-intro-content">
              <div class="section-text my-4">
                Taking place at a wonderful resort about 1-hour drive from Hanoi
                CBD, Zouk It Up with the Masters 2023 will host more than 100
                zoukers from 20 countries. The very first time such an event
                happening in Vietnam and the very first time after Covid, such
                an event is organized in South East Asia.
              </div>
              <div class="section-text my-4">
                Spreading from 14th to 17th April, Zouk It Up will have 12 hours
                of workshops and 20 hours of parties with top-notched DJs in the
                region.
              </div>
              <div class="section-text my-4">
                Tan Da is a beautiful resort hidden in the charms of the Ba Vi
                mountains. In the resort, participants can enjoy such leisure
                activities as kayaking, swimming, sauna, swan-boating, BBQ,
                inter alia. The resort provides for a tranquil and peaceful
                atmosphere.
              </div>
              <div class="section-text my-4">
                Wait no more. Save the dates! Book your flights and join us!
                Let's dance our legs off!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="schedule-section">
        <hr />
        <div class="section-title">EVENT SCHEDULE</div>
        <div class="schedule-container">
          <div class="schedule-content">
            <div class="schedule-plan">
              <div class="schedule-plan-time">
                <div class="schedule-plan-time-date">14</div>
                <div class="schedule-plan-time-month">April</div>
              </div>
              <div class="schedule-plan-line-date" />
              <div class="schedule-plan-activities">
                <div>
                  <i class="fa-regular fa-clock"></i> 7:00PM-8:00PM:
                  Registration Desk Open
                </div>
                <div>
                  <i class="fa-regular fa-clock"></i> 8:00 PM - 2:00 AM (+1):
                  Pre-Party - Tan Da resort
                </div>
              </div>
            </div>
          </div>
          <hr class="schedule-plan-line" />
          <div class="schedule-content">
            <div class="schedule-plan">
              <div class="schedule-plan-time">
                <div class="schedule-plan-time-date">15</div>
                <div class="schedule-plan-time-month">April</div>
              </div>
              <div class="schedule-plan-line-date" />
              <div class="schedule-plan-activities">
                <div>
                  <i class="fa-regular fa-clock"></i> 9:00AM-10:00AM:
                  Registration Desk Open
                </div>
                <div>
                  <i class="fa-regular fa-clock"></i> 10:00 AM - 6:00 PM:
                  Workshop - Tan Da resort
                </div>
                <div>
                  <i class="fa-regular fa-clock"></i> 8:00 PM - 2:00 AM (+1):
                  Social Party - Tan Da resort
                </div>
              </div>
            </div>
          </div>
          <hr class="schedule-plan-line" />
          <div class="schedule-content">
            <div class="schedule-plan">
              <div class="schedule-plan-time">
                <div class="schedule-plan-time-date">16</div>
                <div class="schedule-plan-time-month">April</div>
              </div>
              <div class="schedule-plan-line-date" />
              <div class="schedule-plan-activities">
                <div>
                  <i class="fa-regular fa-clock"></i> 9:00AM-10:00AM:
                  Registration Desk Open
                </div>
                <div>
                  <i class="fa-regular fa-clock"></i> 10:00 AM - 6:00 PM:
                  Workshop - Tan Da resort
                </div>
                <div>
                  <i class="fa-regular fa-clock"></i> 8:00 PM - 2:00 AM (+1):
                  Social Party - Tan Da resort
                </div>
              </div>
            </div>
          </div>
          <hr class="schedule-plan-line" />
          <div class="schedule-content">
            <div class="schedule-plan">
              <div class="schedule-plan-time">
                <div class="schedule-plan-time-date">17</div>
                <div class="schedule-plan-time-month">April</div>
              </div>
              <div class="schedule-plan-line-date" />
              <div class="schedule-plan-activities">
                <div>
                  <i class="fa-regular fa-clock"></i> 12:00 PM: Check-out
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div id="activities-section">
        <div class="section-title">ACTIVITIES SUMMARY</div>
        <div class="activities-content">
          <b-row class="column-width">
            <b-col sm="6" lg="3" md="3" class="activities-item">
              <img
                class="activities-img"
                src="/assets/activities/1. Learn-min.png"
              />
              <div class="section-text">
                <strong>Learn:</strong> 12 hours of workshops delivered by three
                masters: Alisson, Brenda and Gui
              </div>
            </b-col>
            <b-col sm="6" lg="3" md="3" class="activities-item">
              <img
                class="activities-img"
                src="/assets/activities/2. Play-min.png"
              />
              <div class="section-text">
                <strong>Play:</strong> Kayaking; swan-boating; swimming; biking;
                sauna, BBQ and more
              </div>
            </b-col>
            <b-col sm="6" lg="3" md="3" class="activities-item">
              <img
                class="activities-img"
                src="/assets/activities/3. Network-min.png"
              />
              <div class="section-text">
                <strong>Network:</strong> Meet and mingle with Zoukers from 20
                countries
              </div>
            </b-col>
            <b-col sm="6" lg="3" md="3" class="activities-item">
              <img
                class="activities-img"
                src="/assets/activities/4. Chill-min.png"
              />
              <div class="section-text">
                <strong>Chill:</strong> Enjoy the lakeview every sunrise and
                sunset
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <hr />
      <div id="venue-section">
        <div class="section-title">VENUE</div>
        <div class="venue-container">
          <div class="venue-content">
            <div class="venue-sub-title my-4">
              TAN DA SPA RESORT - VAN HOA, BA VI, HANOI, VIETNAM
            </div>
            <div class="section-text my-4">
              The resort is within easy reach by a sixty-minute drive from Hanoi
              CBD, and only one and a half hour drive from Noi Bai International
              Airport.
            </div>
            <div class="section-text my-4">
              The resort has 3 sections consisting of 98 rooms facing Suoi Bon
              lake or green garden and share a traditional Tonkin-styled design,
              providing a great level of comfort while presenting a modern
              standard of Vietnamese luxury.
            </div>
            <div class="section-text my-4">
              What the resort has to offer includes a wide selection of
              pampering services. Stimulate the senses with rejuvenating
              treatments for mind and body at the Spa or recharge in the outdoor
              swimming pool, indoor heated pool with Sauna, and Jacuzzi. Mud
              bathing, soaking in aromatherapy with the stream, kayaking, etc
              are also provided.
            </div>
            <div class="section-text my-4">
              The resort is also home to 3 restaurants, 2 bars, and 1 cafe'. The
              restaurant serves an extensive selection of Vietnamese cuisine and
              fresh tropical fruits. The bar is a wonderful choice for you to
              savor refreshing beverages and cocktails with pairing light
              snacks.
            </div>
            <a href="https://tandasparesort.com.vn/"
              >https://tandasparesort.com.vn/</a
            >
          </div>
        </div>
        <div>
          <b-row class="column-width">
            <b-col
              ><img class="venue-img" src="/assets/venue/venue-1.jpg"
            /></b-col>
            <b-col
              ><img class="venue-img" src="/assets/venue/venue-2.jpg"
            /></b-col>
            <b-col
              ><img class="venue-img" src="/assets/venue/venue-3.jpg"
            /></b-col>
          </b-row>
          <br />
          <b-row class="column-width">
            <b-col
              ><img class="venue-img" src="/assets/venue/venue-4.jpg"
            /></b-col>
            <b-col
              ><img class="venue-img" src="/assets/venue/venue-5.jpg"
            /></b-col>
            <b-col
              ><img class="venue-img" src="/assets/venue/venue-6.jpg"
            /></b-col>
          </b-row>
        </div>
      </div>
      <hr />
      <div class="section-title">CHILL OUT AT THE POOL PARTY</div>
      <div class="pool-party-container">
        <div class="pool-party-text">
          <div class="section-text">
            An extremely vibrant and passionate experience will take place right
            at Tan Da Resort - the venue for Zouk It Up with the Masters event
            with a series of the most exciting outdoor activities -
            <strong>Pool Party!</strong>
          </div>
          <div class="section-text">
            If you decide to be a part of this event, don't miss the pool party
            after hours of Workshops with us.
          </div>
        </div>
        <div>
          <div class="section-sub-title">POOL PARTY</div>
          <div>
            <div class="section-text">
              <strong>Time: </strong>15:00 - 17:00 Friday, April 14, 2023
            </div>
            <div class="section-text">
              <strong>Location: </strong> Outdoor swimming pool - Tan Da Resort
            </div>
          </div>
          <div class="section-text">
            Don't miss the hottest event this April!
          </div>
          <div>
            <img
              class="pool-party-img"
              src="/assets/pool-party/pool-party.jpg"
            />
          </div>
        </div>
      </div>

      <hr class="artist-line" />
      <div id="artists-section">
        <div class="section-title">ARTISTS</div>
        <div class="section-text my-4">
          The triple features experienced professionals for teaching Brazilian
          Zouk around the world, which come from different backgrounds but hold
          the same high level of passion regarding their teaching job. From
          their experience and skills everyone will have the opportunity to
          learn something useful.
        </div>
        <div class="artist-container">
          <b-row class="column-width">
            <b-col lg="4" md="4" sm="12" class="mb-3">
              <div class="card h-100">
                <img
                  src="/assets/artists/1. Alisson.jpg"
                  class="card-img-top"
                  alt="Alison"
                />
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">
                    <strong>ALISSON SANDI</strong>
                  </h5>
                  <b-card-text class="section-text my-4">
                    An official head judge and an important member for the
                    Brazilian Zouk Dance Council since its first competition
                    event in 2014.
                  </b-card-text>

                  <b-button
                    v-b-modal.modal-xl-1
                    class="artist-see-more-button mt-auto"
                    >See More</b-button
                  >
                  <b-modal
                    id="modal-xl-1"
                    size="xl"
                    title="ALISSON SANDI"
                    ok-only
                    ok-title="Close"
                  >
                    <p class="my-4">
                      Alisson Sandi began his dance career at the age of 15 in
                      São Paulo, Brazil where he was born. Over the years he
                      trained in Brazilian Dança de Salão, Street Latin and
                      International Ballroom dancing under the methodology of
                      Alex de Carvalho, Renata Peçanha, Jaime Arôxa, Rodrigo
                      Delano, and other Masters.
                    </p>
                    <p class="my-4">
                      In 2007, he moved to Perth (Australia) where he joined
                      Juan Rando Dance Academly (JRDA) to start the Brazilian
                      dance scene from scratch and continue developing it for
                      the following 10 years. He also trained multiple teachers,
                      international artists, and others who have opened their
                      own schools. During his time in Perth, he met Audrey
                      Isautier and together they became one of the top worldwide
                      Brazilian Zouk Couples between 2010-16, travelling to over
                      41 countries to share their knowledge and passion.
                    </p>
                    <p class="my-4">
                      In 2017 he decided to take up a challenge and moved to
                      Melbourne to help growing and upgrading the local
                      Brazilian dance scene with his fun classes and focused
                      training courses. He also created ‘BraZouky’ - Worldwide
                      Brazilian Dance Festival, which hosts over 300 people and
                      is also a fundraising event which gives dance scholarships
                      for disadvantaged teens and kids in under privileged
                      communities around the world.
                    </p>
                    <p class="my-4">
                      In 2019, Alisson moved to Washington DC (USA) to join
                      District Zouk and their passionate team and has helped the
                      dance community grow healthier and stronger!
                    </p>
                    <ul class="my-4">
                      Alisson loves to push himself and currently holds the
                      following titles:
                      <li>3x Pro World Zouk Champion</li>
                      <li>3x Pro Australian Zouk/Latin Champion</li>
                      <li>
                        Winner/Finalist of various BZDC All Stars/Champions Jack
                        and Jill Comps and Invitationals.
                      </li>
                    </ul>
                    <p class="my-4">
                      Alisson has been an official head judge and an important
                      member for the Brazilian Zouk Dance Council since its
                      first competition event in 2014. And he is one of the
                      founders of the International Zouk Flash Mob/International
                      Zouk Day which has been running yearly since 2012.
                    </p>
                    <p class="my-4">
                      In late 2018, Christina Montoya (USA) went to Australia to
                      train with Alisson and together they won the Australian
                      World Champion in the Mixed Latin Category with the
                      highest partner couple score of the competition. Since
                      then, they have started an exciting partnership and are
                      looking forward to sharing their passion with the world.
                    </p>
                    <p class="my-4">
                      In one of his latest adventures in the midst of 2020’s
                      pandemic that proved to be very successful, was the launch
                      of the ‘ZoukNerds’ group on Facebook. His desire to learn,
                      share and connect with the community which has now over 4k
                      active members, and growing rapidly daily. In this group,
                      Alisson hosts interviews and discussions with key members
                      of the community and also facilitates deep and
                      knowledgeable conversations via posts in the group where
                      members feel heard, welcomed and safe to ask questions and
                      share their experiences.
                    </p>
                    <p class="my-4">
                      In 2022, Alisson has achieved another milestone being
                      invited to become part of the Lecturers for the MAC
                      Project (Method Alex de Carvalho), which is the world’s
                      most comprehensive professional training for Brazilian
                      Zouk, created and directed by the Master Alex de Carvalho.
                    </p>
                    <p class="my-4">
                      Alisson has a passion for teaching and is always striving
                      for innovative ways in which to overcome technical and
                      personal challenges. He is known for his attention to
                      detail and effective instruction in dance techniques.
                    </p>
                  </b-modal>
                </div>
              </div>
            </b-col>
            <b-col lg="4" md="4" sm="12" class="mb-3">
              <div class="card h-100">
                <img
                  src="/assets/artists/2. Brenda.jpg"
                  class="card-img-top"
                  alt="Alison"
                />
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">
                    <strong>BRENDA CARVALHO</strong>
                  </h5>
                  <b-card-text class="section-text my-4">
                    Creator and organizer of the only Brazilian congress that
                    combines the use of Zouk as a tool for self-knowledge and
                    other human development tools, Beyond Dance.
                  </b-card-text>
                  <b-button
                    v-b-modal.modal-xl-2
                    class="artist-see-more-button mt-auto"
                    >See More</b-button
                  >
                  <b-modal
                    id="modal-xl-2"
                    size="xl"
                    title="BRENDA CARVALHO"
                    ok-only
                    ok-title="Close"
                  >
                    <p class="my-4">
                      Brenda has been dancing professionally since she was 20.
                      She is an international artist, multidisciplinary
                      researcher and researcher of movement. Using dance as a
                      tool for self-knowledge, healing and self-awareness, she
                      experiences and inspires people around the world to get in
                      touch with their state of presence, connection, flow,
                      grace and power.
                    </p>
                    <p class="my-4">
                      Her training is vast and full of studies that go beyond
                      movement, such as non-violent communication, neo tantra,
                      emotional intelligence, Eutonia, the De Rose method, dance
                      therapy, in addition to training in ballroom dancing with
                      Jaime Aroxa and the development of her own method,
                      together with her partner of 12 years, Anderson Mendes da
                      Rocha.
                    </p>
                    <p class="my-4">
                      Together they are pioneers in deepening connection and
                      expansion of consciousness within the world of Zouk and
                      their demonstrations of this form of dancing inspire and
                      attract hundreds of people to the world of Zouk.
                    </p>
                    <p class="my-4">
                      She is the creator and organizer of the only Brazilian
                      congress that combines the use of Zouk as a tool for
                      self-knowledge and other human development tools, Beyond
                      Dance. As well as retreats and immersions that propose a
                      more humane and integrative look at social dance.
                    </p>
                  </b-modal>
                </div>
              </div>
            </b-col>
            <b-col lg="4" md="4" sm="12" class="mb-3">
              <div class="card h-100">
                <img
                  src="/assets/artists/3. Gui.jpg"
                  class="card-img-top"
                  alt="Gui"
                />
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">
                    <strong>GUI PRADA</strong>
                  </h5>
                  <b-card-text class="section-text my-4">
                    One of the regular instructors of Alex de Carvalho’s MAC
                    program, where he teaches new instructors how to learn, talk
                    about and teach connection.
                  </b-card-text>
                  <b-button
                    v-b-modal.modal-xl-3
                    class="artist-see-more-button mt-auto"
                    >See More</b-button
                  >
                  <b-modal
                    id="modal-xl-3"
                    size="xl"
                    title="GUI PRADA"
                    ok-only
                    ok-title="Close"
                  >
                    <p class="my-4">
                      Inspired by the movie "Shall We Dance?", Gui Prada started
                      dancing in 2004. However, it was only in 2006 that he
                      really began to dive deep into dance as a work-study
                      trainee of the Jaime Aroxa Dance School in Rio de Janeiro,
                      one of the most prestigious dance schools in Brazil, which
                      trained some of the most renowned dancers in the country.
                      During his 6 years as a member of the school's team, he
                      learned all Brazilian partner dances (Forró, Samba de
                      Gafieira, Soltinho, Bolero and Zouk) and Argentine Tango.
                      As he matured more as a dancer, he found he preferred to
                      focus less on the steps and more on turning partner
                      dancing into a relaxing experience for the mind and body.
                    </p>
                    <p class="my-4">
                      In 2009, on his first visit to Buenos Aires, Argentina, he
                      was introduced to the authentic tango hug - the close
                      embrace - and all of its complexity and power to create
                      the ultimate feeling of “conforto, cuidado e entrega” -
                      comfort, care and surrender. After that, he continued
                      learning from other remarkable instructors in Brazil,
                      including Fabiano Vivas, Kelly Reis, Érico Rodrigo,
                      Guilherme Pimentel, Lídio Freitas and many others; and
                      went on to research the close embrace and its application
                      to all partner dances, with the purpose of conveying a
                      sense of well-being and relaxation between dance partners.
                    </p>
                    <p class="my-4">
                      His investigation of the close embrace continued over the
                      years, and through many sources both inside and outside of
                      the dance world. These studies guided him to form a
                      multidisciplinary understanding of dancing and connecting
                      in close embrace as a healing and therapeutic experience.
                      Due to its versatility in movement, music, speed and
                      approach, Brazilian Zouk became the perfect dance to apply
                      this concept and explore the possibilities, which he has
                      been doing since 2016, when he attended the first Zouk
                      Retreat in Valencia, led by Xandy Liberato, Brenda
                      Carvalho and Anderson Mendes. After that, his research on
                      partner dancing took a new direction, as he continued
                      working to seek for the application of the concepts
                      explored at the retreat in different ways by using the
                      references of the other Brazilian partner dances.
                    </p>
                    <p class="my-4">
                      Currently, he develops the idea of partner dancing as a
                      true social and bonding experience, having dancing in
                      close embrace and the mastery of basics as the focus
                      point. Over the course of the years, Gui was able to
                      develop and improve this concept through workshops called
                      “The Universe Behind the Hug”, Parts I and II, Finding
                      Zouk, Embrace Zouk Weekender, Embrace Zouk Online, and the
                      Leaders Intensive Training, which together toured many
                      cities around the US. Gui is based in Washington DC, US,
                      developing the local community with regular, weekly and
                      progressive classes. He became a reference in the
                      execution of clean, comfortable fundamentals and its
                      understanding of close connection, both from a physical
                      and mental perspectives. Gui is also one of the regular
                      instructors of Alex de Carvalho’s MAC program, where he
                      teaches new instructors how to learn, talk about and teach
                      connection.
                    </p>
                  </b-modal>
                </div>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <hr />
      <div id="passes-section">
        <div class="section-title">PASSES</div>
        <div>
          <div>
            <div class="passes-sub-title" style="color: red">
              ONLY 100$ PER PAX
            </div>
            <div>
              <b-button
                class="passes-button"
                variant="success"
                v-b-modal.modal-xl
                >BUY TICKETS!</b-button
              >
              <b-modal
                id="modal-xl"
                title="PAYMENT METHODS"
                ok-only
                hide-header-close
                ok-title="Close"
              >
                <div class="passes-popup">
                  <div class="section-sub-title">
                    <div class="passes-popup-title-1">1. BANK TRANSFER</div>
                    <div>Transfer information:</div>
                    <div>Account name: Vu Hoai Phuong</div>
                    <div>Vietcombank Account</div>
                    <div>Number: 0011001291181</div>
                    <div>Description: ZIU - Name - Phone number</div>
                    <img
                      class="passes-qr-code"
                      src="/assets/passes/qr-code.png"
                    />
                    <div class="passes-popup-title-2">2. PAY AT DOOR</div>
                  </div>
                </div>
              </b-modal>
            </div>
            <div class="passes-notes">
              <div><strong>Important things to note:</strong></div>
              <div>
                1. Passes to the event are transferrable and not refundable
              </div>
              <div>
                2. The organizer reserves the right to remove any participant(s)
                from the event if they are deemed to have disrupted the event or
                displayed behavior that compromises the safety of other
                participants. No refund will be issued in such cases
              </div>
              <div>
                3. The organizer shall not be held responsible for any damage,
                loss or property and/or injury incurred as a result of you
                attending the event
              </div>
            </div>
            <hr />
            <div class="section-text">
              For room booking, please book directly with Ms. Hang (Tan Da
              Resort)
            </div>
            <div class="section-text">
              <div>1. Email: sales1@tandasparesort.com.vn</div>
              <div>CC: phuongtrangzouk@gmail.com</div>
              <div>Subject: "Booking for PTZ Apr 2023 event"</div>
            </div>

            <div class="section-text">2. Whatsapp: +84 989987117</div>
            <hr />
            <div class="section-text">
              <div class="section-sub-title">
                BUDDIES PASS, SAVING VND 600,000
              </div>
              <img
                src="../assets/passes/buddies-pass.jpg"
                width="400"
                height="300"
              />
              <div class="section-text">
                A reduction of VND 600,000 when registering as Leader - Follower
              </div>
              <div class="section-text">
                Now only VND 4,400,000 / 2 pax (instead of VND 5,000,000 / 2
                pax)
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="about-ptz-section">
        <div class="section-title">ABOUT PTZ</div>
        <div class="about-ptz-container">
          <div class="about-ptz-text">
            <div class="section-text my-4">
              PTZ - Phuong & Trang Zouk Vietnam - is the leading studio for
              Brazilian Zouk in Hanoi, Vietnam. Founded in 2019, PTZ has been on
              the forefront of spreading Brazilian Zouk in the local community.
              PTZ offers weekly classes, social dancing and periodic Brazilian
              Zouk events. Our syllabus is regularly updated to keep abreast
              with the latest developments in the world. Our parties are spinned
              live and non-stop by our local DJs.
            </div>
            <div class="section-text my-4">
              PTZ's iconic event - Zouk It Up - has been up and running since
              2022. We have hosted Dominik and Monika, Alisson Sandi, and Nhat
              Ho and Gigi Ho. In 2023, we will be welcoming Alisson Sandi,
              Brenda and Gui in April and more artists in July and November.
              Before that, our founders, Hoai Phuong and Huyen Trang, have been
              hosting various Brazilian Zouk artists in Hanoi, such as Alisson
              Sandi - 4 times, Arthur and Layssa, Brenda and Anderson, and
              Gilson Damasco. We are committed to organizing the best events in
              town with internationally recognized artists to promote Brazilian
              Zouk in Hanoi, Vietnam.
            </div>
            <div>
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <b-carousel-slide>
                  <template #img>
                    <img
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="480"
                      src="/assets/about-ptz/about-ptz-1-min.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template #img>
                    <img
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="480"
                      src="/assets/about-ptz/about-ptz-2-min.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template #img>
                    <img
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="480"
                      src="/assets/about-ptz/about-ptz-3-min.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template #img>
                    <img
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="480"
                      src="/assets/about-ptz/about-ptz-4-min.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </div>
            <div class="section-text my-4">
              Hoai Phuong and Huyen Trang started their partnership in late
              2017. We are a couple of Friday night and Sunday morning. Trang is
              like a Friday night – always dynamic, vibrant, full of life with a
              beautiful smile on her face and very nice pose whenever she
              dances. Phuong is like a Sunday morning with a hot black coffee –
              slow to start, taking time to filter, but when the caffeine kicks
              in, he rocks as both a DJ and a dancer. That’s the way the
              partnership has gone over the past 5++ years.
            </div>
            <div class="section-text my-4">
              Phuong and Trang won their first international trophy in 2018 with
              the 2nd place in the ProAm Competition at ZoukSEA. Since then,
              they have been performing in various congresses, both nationally,
              such as the Vietnam Latin Xperience, the Vietnam International
              Latin Festival, and internationally, like ZoukSensation and the
              1st China Zouk Congress in Shanghai. Phuong and Trang also taught
              workshops in multiple events at home and abroad.
            </div>
          </div>
        </div>
      </div>
    </body>
    <b-button variant="success" class="book-now" v-b-modal.modal-xl
      >BUY TICKETS!</b-button
    >
    <footer class="footer-section">
      <hr class="footer-line" />
      <!-- <div class="footer-title">CONTACT CHANNELS</div> -->
      <div class="footer-container">
        <!-- <div id="subscribe-section">
          <div class="section-sub-title">
            ALL UPDATED INFORMATION DIRECTLY TO YOUR INBOX
            <div class="text-media">
              Your email address
              <input class="subscribe-section-input" /><button
                class="subscribe-section-button"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div> -->
        <div id="contact-channel-section">
          <div class="section-sub-title">OUR CONTACT CHANNELS</div>
          <div class="media">
            <div>
              <a
                href="https://www.facebook.com/PhuongTrangZoukVietnam"
                target="_blank"
              >
                <i class="fa-brands fa-facebook media-icons"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/phuongtrangzouk"
                target="_blank"
              >
                <i class="fa-brands fa-instagram media-icons"></i
              ></a>
            </div>
            <div>
              <a
                href="
            https://www.youtube.com/channel/UCjCX1AIUnHyCTJM2ClEEyFA"
                target="_blank"
              >
                <i class="fa-brands fa-youtube media-icons"></i>
              </a>
            </div>
            <div>
              <a href="https://www.tiktok.com/@ptz_zouk" target="_blank">
                <i class="fa-brands fa-tiktok media-icons"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  // meta: [
  //   {
  //     name: "description",
  //     content: "This is my awesome web application.",
  //   },
  //   {
  //     property: "og:image",
  //     content: "https://www.zoukitup.vn/img/main-banner.bdb8701a.webp",
  //   },
  // ],
  data() {
    return {
      scTimer: 0,
      scY: 0,
      end: new Date("April 14, 2023"),
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    countdownTime() {
      let now = new Date();
      let distance = this.end - now;
      return distance;
    },
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
html,
body {
  font-family: "Poppins", sans-serif;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  .logo-header {
    margin-left: 47%;
    width: 53%;
    height: 55px;
    background-color: white;
    justify-content: space-between;
  }
  @media (max-width: 430px) {
    .logo-header {
      margin-left: 35%;
      width: 65%;
    }
  }
}
#dropdown-right {
  display: none;
}
@media (max-width: 430px) {
  #dropdown-right {
    display: block;
  }
}
.header-dropdown-nav {
  display: flex;
  flex-direction: column;
  &-item {
    text-decoration: none;
    color: black;
    margin: auto;
    font-size: 18px;
    padding: 5px 0px;
  }
}
.column-width {
  width: 100%;
  margin: 0px !important;
}
.section {
  &-title {
    font-size: 30px;
    font-weight: 700;
    color: #6305a6;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  &-sub-title {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
  }
  &-text {
    margin: 15px 0px;
    font-size: 20px;
  }
  @media (max-width: 769px) {
    &-title {
      font-size: 20px;
      margin: 0px;
    }
    &-sub-title {
      font-size: 16px;
      margin: 0px 0px 10px 0px;
    }
    &-text {
      font-size: 16px;
      margin: 0px;
    }
  }
}
.nav-bar {
  position: absolute;
  top: 20px;
  right: 40px;
  &-item {
    text-decoration: none;
    margin: 0px 20px;
    color: white;
    font-size: 20px;
  }
  @media (max-width: 430px) {
    &-item {
      display: none;
      font-size: 12px;
    }
  }
  @media (max-width: 769px) {
    .nav-bar {
      right: 80px;
    }
  }
}
.logo {
  top: 2px;
  margin: auto;
  width: 120px !important;
  height: 50px !important;
}
.main-banner {
  &-container {
    position: relative;
    text-align: center;
    color: white;
  }
  &-img {
    width: 100%;
    height: 750px;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("../assets/banner/main-banner.webp");
  }
  @media (max-width: "430px") {
    &-img {
      width: 100%;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("../assets/banner/main-banner-rotate.png");
    }
  }
  &-title {
    position: absolute;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 90px;
    width: 80%;
    font-weight: 300;
  }
  &-subtitle {
    font-size: 50px;
    color: white;
    font-weight: 100;
  }
  &-subtitle-date {
    margin-bottom: 30px;
  }
  @media (max-width: 769px) {
    &-title {
      font-size: 48px;
      top: 55%;
    }
    &-img {
      height: 550px;
    }
  }
  @media (max-width: 430px) {
    &-title {
      font-size: 38px;
      top: 55%;
    }
    &-img {
      height: 700px;
    }
    &-subtitle {
      font-size: 25px;
    }
  }
}
.countdown {
  &-clock {
    margin: auto;
    width: 50%;
    padding: 10px;
    border: solid 2px;
  }
  &-time {
    display: flex;
    justify-content: space-around;
  }
  &-time-number {
    font-size: 50px;
    font-weight: 600;
  }
  &-time-unit {
    font-size: 30px;
  }
  @media (max-width: 769px) {
    &-time-number {
      font-size: 30px;
    }
    &-time-unit {
      font-size: 15px;
    }
  }
  @media (max-width: 430px) {
    &-clock {
      margin: auto;
      width: 80%;
      padding: 10px;
      border: solid 1px;
    }
  }
  @media (max-width: 430px) {
    &-time-number {
      font-size: 18px;
    }
    &-time-unit {
      font-size: 12px;
    }
  }
}

.body-container {
  width: 70%;
  margin: auto;
  @media (max-width: 769px) {
    width: 95%;
  }
}

.quick-intro-section {
  top: 130%;
  left: 30%;
  font-size: 20px;
}
.quick-intro-content {
  width: 67%;
  margin: auto;
  text-align: justify;
  padding: 30px 0px;
}
#schedule-section {
  background-image: linear-gradient(to left, #a459da, rgb(231, 195, 240));
}
.schedule-plan {
  display: flex;
  justify-content: space-around;
  text-align: left;
  &-time {
    margin-left: 20%;
    margin-bottom: 2%;
    &-date {
      font-size: 50px;
      font-weight: 700;
    }
    &-month {
      font-weight: 600;
      text-align: center;
    }
    @media (max-width: 769px) {
      margin-left: 15%;
      &-date {
        font-size: 30px;
        margin-top: 18px;
      }
    }
  }
  &-activities {
    margin-top: 15px;
    margin-left: 0.5%;
    width: 50%;
    font-size: 20px;
    @media (max-width: 769px) {
      font-size: 15px;
    }
    @media (max-width: 430px) {
      margin-top: 10px;
    }
  }
  &-line {
    width: 60%;
    margin: auto;
    border: 1px solid;
    background-color: #6305a6;
    &-date {
      border: 1px solid;
      background-color: #6305a6;
      height: 100px;
      margin-left: 20px;
      margin-top: 10px;
    }
    @media (max-width: 430px) {
      &-date {
        margin-bottom: 10px;
      }
    }
  }
}
.activities {
  &-content {
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
  }
  &-img {
    margin: 30px 0px;
    width: 80%;
  }
  @media (max-width: 500px) {
    &-item {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      display: flex;
      align-items: center;
      text-align: start;
    }
    &-img {
      margin: 0 10px;
      width: 25%;
    }
  }
}
.pool-party-time {
  text-align: left;
}
.pool-party-img {
  width: 70%;
  border-radius: 10px;
}

.venue-container {
  display: flex;
  justify-content: space-between;
  justify-content: center;
  margin: 30px 0px;
}
.venue-content {
  text-align: justify;
}
.venue-sub-title {
  font-size: 20px;
  font-weight: 700;
}
.venue-img {
  width: 100%;
}
.artist {
  &-line {
    margin-top: 30px;
  }
  &-container {
    margin-top: 20px;
  }
  &-img {
    width: 300px;
    height: 300px;
  }
  &-card {
    height: 580px !important;
    width: 100%;
  }
  &-see-more-button {
    margin-bottom: 2px !important;
    text-align: center;
  }
  @media (max-width: 769px) {
    &-card {
      height: 570px !important;
    }
    &-see-more-button {
      bottom: 0px !important;
    }
  }
}
.passes {
  &-container {
    display: flex;
    justify-content: space-around;
  }
  &-content {
    font-size: 30px;
    width: 100%;
  }
  &-sub-title {
    font-weight: 700;
    margin: 20px auto;
  }
  &-button {
    margin: 20px auto;
  }
  &-notes {
    font-size: 15px;
    text-align: left;
  }
  &-text {
    font-size: 18px;
    margin: 30px auto;
  }
  &-popup {
    margin: auto;
    text-align: center;
  }
  &-qr-code {
    margin: 20px auto;
    width: 300px;
  }
  &-popup-title-1 {
    margin-top: -30px;
    margin-bottom: 10px;
  }
  @media (max-width: 769px) {
    &-popup-title-1 {
      margin-top: 0px;
    }
  }
  &-popup-title-2 {
    margin: 10px auto;
  }
}

/* .passes-img {
  width: 300px;
  height: 300px;
  margin-bottom: 30px;
} */

.about-ptz-container {
  display: flex;
  justify-content: space-between;
}
.about-ptz-text {
  text-align: justify;
}
.footer-line {
  margin-top: 30px;
}
.footer-section {
  background-image: linear-gradient(rgb(184, 103, 204), #432955);
  color: white;
}
.footer-title {
  font-size: 30px;
  font-weight: 700;
  color: white;
  margin-top: 60px;
  margin-bottom: 20px;
}
.footer-container {
  padding: 30px 0px 30px 0px;
  display: flex;
  justify-content: space-around;
}
.subscribe-section-input {
  border: none;
}
.subscribe-section-button {
  border: none;
  margin-left: 10px;
}
.text-media {
  font-weight: 500;
  font-size: 18px;
  margin-top: 20px;
}
.media {
  font-size: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}
.media-icons {
  text-decoration: none;
  font-size: 25px;
  color: white;
}
.back-to-top {
  position: fixed;
  cursor: pointer;
  float: right;
  right: 0px;
  top: 90%;
  width: 5%;
  font-size: 12px;
}
.book-now {
  position: fixed;
  cursor: pointer;
  right: 20px;
  top: 90%;
  width: 7%;
  font-size: 15px;
}
@media (max-width: 1025px) {
  .book-now {
    width: 10%;
  }
}
@media (max-width: 769px) {
  .book-now {
    font-size: 15px;
    width: 12%;
  }
}
@media (max-width: 430px) {
  .book-now {
    font-size: 10px !important;
    width: 15%;
  }
}
@media (max-width: 430px) {
  .book-now {
    font-size: 10px !important;
    width: 18%;
  }
}
@media (max-width: 430px) {
  .book-now {
    font-size: 10px !important;
    width: 20%;
  }
}
.button {
  background-color: rgb(128, 80, 128) !important;
  border: none;
}
</style>
