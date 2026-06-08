const { useEffect, useMemo, useState } = React;
const e = React.createElement;

const bookingImages = [
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/802747043.jpg?k=a1f3089fbcef0eaaa6e4258bbdc3037aed8165e98d0a6b7d52b279606fef560b&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/820941211.jpg?k=01c3609ece7f917727bb55a33fe20239152dfd0b020d04673c708c7db1ebde84&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/774849617.jpg?k=33018c1ceeccda1a37a94b6fb5fe9ac8db50cce77f346a50b7509598d2e8eee4&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/802664642.jpg?k=9f88e8c84736568675c5f299a11f9086dbeb0d777dc9b4721412147f9b1a5571&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/772392795.jpg?k=2c743e46a38cb0e02f5d639f2d10e8102910dbec718bf5fc2b4ff581112ec9f6&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/802747095.jpg?k=d5143eed06997ecb2bd8605c9492a5f586aafca35d481ab5ebda77f6e45ebd55&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/772391778.jpg?k=819fbbe7fd5b4f82e09427f4d27bdb948c3ca5185e1fc78d6112f3a36fb387f1&o="
];

const supabaseReady = {
  tables: ["rooms", "events", "stories", "testimonials", "booking_requests", "gallery_assets"],
  note: "All key sections are rendered from structured data arrays so they can be replaced by Supabase queries without redesigning components."
};

const navItems = [
  { label: "Home", path: "home" },
  { label: "Community", path: "community" },
  { label: "Experiences", path: "events" },
  { label: "Workation", path: "workation" },
  { label: "Rooms", path: "rooms" },
  { label: "Pondicherry", path: "pondicherry" },
  { label: "Stories", path: "stories" },
  { label: "About", path: "about" }
];

const pageData = {
  home: {
    eyebrow: "Pondicherry meets people-first travel",
    title: "Stay where strangers become your Pondicherry story.",
    copy: "Woodpacker is a warm, design-conscious hostel for travelers who want more than a bed. It is a place for rooftop conversations, shared breakfasts, slow beach mornings, work-friendly afternoons, and the kind of friendships that make a city feel familiar.",
    image: bookingImages[0],
    imageLabel: "Real property image: replace with final hero shoot after brand photoshoot",
    cta: "Start your journey",
    secondary: "Explore the community",
    secondaryPath: "community"
  },
  community: {
    eyebrow: "Community at Woodpacker",
    title: "The best part of the stay is often the person you meet at dinner.",
    copy: "Our common spaces are designed for unforced connection: a table that makes room for one more plate, a terrace where travel plans change, and quiet corners where conversations run longer than expected.",
    image: bookingImages[1],
    imageLabel: "Community lounge image placeholder"
  },
  events: {
    eyebrow: "Events and experiences",
    title: "A hostel that moves with the rhythm of Pondicherry.",
    copy: "From rooftop music nights to sunrise cycles, Woodpacker turns every week into a small calendar of moments. Guests can join what feels right, skip what does not, and still feel part of the house.",
    image: bookingImages[5],
    imageLabel: "Rooftop or event image placeholder"
  },
  workation: {
    eyebrow: "Long stays and workations",
    title: "Work clearly, live lightly, belong quickly.",
    copy: "For remote workers and slow travelers, Woodpacker offers a grounded rhythm: reliable WiFi, productive corners, a community that understands deep-work days, and a destination that rewards every logged-off hour.",
    image: bookingImages[6],
    imageLabel: "Workation desk and common area image placeholder"
  },
  rooms: {
    eyebrow: "Rooms and stays",
    title: "Simple, comfortable stays for every kind of traveler.",
    copy: "Choose the energy you need: social dorms for backpackers, private rooms for slower mornings, and group-friendly options for crews arriving together.",
    image: bookingImages[2],
    imageLabel: "Room image placeholder"
  },
  pondicherry: {
    eyebrow: "Local Pondicherry",
    title: "French streets, sea air, cafe mornings, and hidden detours.",
    copy: "Pondicherry is not a checklist. It is a pace. We help guests move through it like locals: sunrise on the promenade, bicycles through quiet lanes, coffee in the French Quarter, and day trips into Auroville's green calm.",
    image: "https://images.unsplash.com/photo-1583684103169-092a4f6f1339?auto=format&fit=crop&w=1400&q=80",
    imageLabel: "Destination image placeholder: replace with original Pondicherry photography"
  },
  stories: {
    eyebrow: "Traveler stories",
    title: "Small journeys, remembered well.",
    copy: "A travel magazine for the people who pass through Woodpacker: the friends made over tea, the routes discovered by accident, the workations that became second homes, and the nights that changed tomorrow's plan.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80",
    imageLabel: "Stories editorial image placeholder"
  },
  about: {
    eyebrow: "About Woodpacker",
    title: "Built for freedom, rooted in human connection.",
    copy: "Woodpacker exists for travelers who want to feel awake to a place. We believe good hostel design is not just beds and bathrooms. It is the invisible hospitality of making people feel welcome, independent, safe, and gently connected.",
    image: bookingImages[0],
    imageLabel: "Brand identity image placeholder"
  }
};

const communityStories = [
  {
    title: "The table that starts with one hello",
    copy: "Most evenings begin quietly: someone chopping fruit, someone asking about tomorrow's beach plan, someone returning from Auroville with red dust on their shoes. By dinner, the table has grown into a map of accents, routes, and half-made plans.",
    meta: "Group dinners"
  },
  {
    title: "Friendships formed between check-in and checkout",
    copy: "A solo traveler from Pune, a designer from Berlin, two students from Kochi, and a cyclist from Spain may arrive on different days. Woodpacker gives them the common ground to leave as a group chat.",
    meta: "Shared experiences"
  },
  {
    title: "Common spaces with a pulse",
    copy: "The lounge is for soft mornings, charging laptops, borrowing sunscreen, debating cafes, and the easy silence of people who do not need to perform to feel welcome.",
    meta: "Conversations"
  }
];

const testimonials = [
  {
    quote: "I booked two nights and stayed for a week because the place felt like a tiny traveling family.",
    name: "Ananya",
    role: "Solo traveler from Mumbai"
  },
  {
    quote: "The staff helped me find surf lessons, a work corner, and people to have dinner with on my first night.",
    name: "Leo",
    role: "Remote designer from Germany"
  },
  {
    quote: "It was social without being loud. I could work in the afternoon and still have a memorable evening.",
    name: "Meera",
    role: "Founder on workation"
  }
];

const events = [
  { icon: "fa-champagne-glasses", title: "Rooftop Gatherings", copy: "Golden-hour meetups with music, soft lights, and the week's newest arrivals swapping routes and recommendations.", cadence: "Weekly" },
  { icon: "fa-music", title: "Music Nights", copy: "Acoustic sets and guest playlists that move from mellow travel songs to the kind of chorus everyone knows.", cadence: "Friday nights" },
  { icon: "fa-microphone-lines", title: "Open Mic Sessions", copy: "A gentle stage for poems, jokes, travel stories, and songs from people who did not plan to perform.", cadence: "Twice a month" },
  { icon: "fa-person-praying", title: "Yoga Mornings", copy: "Slow stretches, clear breathing, and a calm start before the city wakes up fully.", cadence: "Select mornings" },
  { icon: "fa-water", title: "Surf Trips", copy: "Coordinated beach runs for first-timers and returning surfers, with local instructor referrals.", cadence: "Seasonal" },
  { icon: "fa-bicycle", title: "Cycling Tours", copy: "Easy rides through Auroville trails, heritage lanes, cafes, and shaded backroads.", cadence: "Weekend mornings" },
  { icon: "fa-landmark", title: "Cultural Walks", copy: "Small-group walks through French Quarter facades, Tamil streets, local markets, and stories behind the walls.", cadence: "Weekly" },
  { icon: "fa-utensils", title: "Community Dinners", copy: "Shared food, open seats, and the most natural way to meet people after a long day outside.", cadence: "Multiple nights" },
  { icon: "fa-film", title: "Movie Nights", copy: "Courtyard screenings with easy classics, travel films, and post-movie conversations.", cadence: "Sunday nights" },
  { icon: "fa-hands-holding-circle", title: "Local Workshops", copy: "Hands-on introductions to crafts, food, wellness, and Pondicherry's creative community.", cadence: "Pop-ups" }
];

const workationBenefits = [
  { title: "Fast WiFi", copy: "Designed for calls, uploads, deep work, and the real needs of remote professionals." },
  { title: "Work-friendly rhythm", copy: "Quiet pockets for focus, social spaces for breaks, and evenings that help you reset." },
  { title: "Community networking", copy: "Meet designers, founders, writers, freelancers, students, and long-stay travelers." },
  { title: "Balanced days", copy: "Start with yoga, work through the afternoon, then cycle to the beach before dinner." },
  { title: "Long-stay ease", copy: "Flexible stay support, local guidance, laundry access, and a team that knows your name." },
  { title: "Coworking atmosphere", copy: "A hostel setting with the energy of a creative studio and the softness of a home base." }
];

const rooms = [
  {
    title: "Social Dormitories",
    image: bookingImages[2],
    price: "From INR 810/night",
    copy: "For backpackers who want comfort without losing the best part of hostel travel: the people. Expect clean bunks, personal storage, and a friendly, energetic atmosphere.",
    tags: ["Mixed dorms", "Lockers", "Reading lights", "Budget friendly"]
  },
  {
    title: "Private Rooms",
    image: bookingImages[3],
    price: "From INR 2,500/night",
    copy: "A calmer stay for couples, remote workers, or travelers who want privacy while staying close to the Woodpacker community.",
    tags: ["Double bed", "A/C", "Private comfort", "Work-friendly"]
  },
  {
    title: "Female Dormitory",
    image: bookingImages[4],
    price: "From INR 850/night",
    copy: "A thoughtful dorm option with extra privacy and a warm social environment for solo women travelers and friends traveling together.",
    tags: ["Female only", "A/C", "Secure storage", "Community access"]
  },
  {
    title: "Group Stays",
    image: bookingImages[1],
    price: "Custom plans",
    copy: "For student groups, creative crews, and friends arriving together. Woodpacker helps groups stay connected while still giving everyone space.",
    tags: ["Shared rooms", "Event support", "Flexible planning", "Local guidance"]
  }
];

const localHighlights = [
  { title: "French Quarter", copy: "Pastel facades, quiet streets, old balconies, and cafe tables made for unhurried mornings." },
  { title: "Beaches", copy: "Sunrise walks, surf lessons, evening swims, and the salt-air reset every traveler secretly needs." },
  { title: "Auroville", copy: "Forested roads, creative communities, quiet cafes, and a different way to think about daily life." },
  { title: "Cafe culture", copy: "From espresso corners to garden brunches, Pondicherry rewards people who leave room in the day." },
  { title: "Heritage streets", copy: "A layered city of Tamil homes, colonial traces, markets, temples, and sea-facing boulevards." },
  { title: "Hidden gems", copy: "The places that rarely make lists: tiny bakeries, sunset turns, calm courtyards, and local studios." }
];

const stories = [
  {
    title: "A three-day stay that became a month",
    category: "Workation",
    copy: "Rhea arrived between client projects and planned to keep moving. Then she found a morning routine: coffee, calls, a late lunch with new friends, and a bicycle ride through Auroville after work."
  },
  {
    title: "The dinner where five routes became one",
    category: "Community",
    copy: "Nobody came to Pondicherry with the same plan. By dessert, they had rented cycles for the next morning and chosen a cafe by committee."
  },
  {
    title: "Learning the city slowly",
    category: "Destination",
    copy: "Some guests collect landmarks. Others collect rituals: the same bakery, the same sunrise wall, the same hello from the person at the corner shop."
  },
  {
    title: "First open mic, first travel song",
    category: "Events",
    copy: "A traveler who had never performed borrowed a guitar after dinner. Ten minutes later, the courtyard was singing softly with him."
  }
];

function currentRoute() {
  const route = window.location.hash.replace("#/", "").replace("#", "");
  return pageData[route] ? route : "home";
}

function Icon({ name }) {
  return e("i", { className: `fa-solid ${name}`, "aria-hidden": "true" });
}

function Header({ route, onNavigate }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => document.body.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return e("header", { className: "site-header" },
    e("nav", { className: "nav-shell", "aria-label": "Main navigation" },
      e("a", { href: "#/home", className: "brand", onClick: () => setOpen(false) },
        e("span", { className: "brand-mark" }, "WP"),
        e("span", { className: "brand-copy" },
          e("strong", null, "Woodpacker"),
          e("small", null, "Hostel Pondicherry")
        )
      ),
      e("button", {
        className: `menu-toggle ${open ? "active" : ""}`,
        type: "button",
        "aria-label": "Toggle navigation",
        onClick: () => setOpen(!open)
      }, e("span"), e("span"), e("span")),
      e("div", { className: `nav-links ${open ? "open" : ""}` },
        navItems.map(item => e("a", {
          key: item.path,
          href: `#/${item.path}`,
          className: route === item.path ? "active" : "",
          onClick: () => {
            setOpen(false);
            onNavigate(item.path);
          }
        }, item.label)),
        e("a", { href: "#booking", className: "nav-cta", onClick: () => setOpen(false) }, "Book Now")
      )
    )
  );
}

function PageHero({ data }) {
  return e("section", { className: "page-hero" },
    e("div", { className: "hero-grid" },
      e("div", { className: "hero-story" },
        e("p", { className: "eyebrow" }, data.eyebrow),
        e("h1", null, data.title),
        e("p", { className: "lead" }, data.copy),
        e("div", { className: "hero-actions" },
          e("a", { className: "btn btn-primary", href: "#booking" }, data.cta || "Plan your stay"),
          e("a", { className: "btn btn-secondary", href: `#/${data.secondaryPath || "rooms"}` }, data.secondary || "See rooms")
        )
      ),
      e("figure", { className: "hero-media" },
        e("img", { src: data.image, alt: data.imageLabel }),
        e("figcaption", null, data.imageLabel)
      )
    )
  );
}

function SectionIntro({ eyebrow, title, copy }) {
  return e("div", { className: "section-intro" },
    e("p", { className: "eyebrow" }, eyebrow),
    e("h2", null, title),
    copy && e("p", null, copy)
  );
}

function CTA({ title, copy, label = "Check availability" }) {
  return e("section", { className: "cta-band" },
    e("div", { className: "container cta-inner" },
      e("div", null, e("p", { className: "eyebrow" }, "Stay closer to the story"), e("h2", null, title), e("p", null, copy)),
      e("a", { href: "#booking", className: "btn btn-light" }, label)
    )
  );
}

function StoryCards() {
  return e("section", { className: "section" },
    e("div", { className: "container" },
      e(SectionIntro, {
        eyebrow: "Inside the house",
        title: "Community that feels natural, not manufactured.",
        copy: "The strongest moments at Woodpacker are not scripted. They are hosted with care, then left enough room to become real."
      }),
      e("div", { className: "story-card-grid" },
        communityStories.map(story => e("article", { className: "story-card", key: story.title },
          e("span", null, story.meta),
          e("h3", null, story.title),
          e("p", null, story.copy)
        ))
      )
    )
  );
}

function Testimonials() {
  return e("section", { className: "section muted" },
    e("div", { className: "container" },
      e(SectionIntro, { eyebrow: "Guest voices", title: "What guests remember after they leave." }),
      e("div", { className: "testimonial-grid" },
        testimonials.map(item => e("figure", { className: "testimonial", key: item.name },
          e("blockquote", null, item.quote),
          e("figcaption", null, e("strong", null, item.name), e("span", null, item.role))
        ))
      )
    )
  );
}

function Gallery({ title = "Community gallery", copy = "Replace these placeholders with owned images from dinners, rooms, rooftops, work corners, and destination walks." }) {
  return e("section", { className: "section" },
    e("div", { className: "container" },
      e(SectionIntro, { eyebrow: "Visual moments", title, copy }),
      e("div", { className: "gallery-grid" },
        bookingImages.slice(0, 6).map((src, index) => e("figure", { className: `gallery-tile tile-${index + 1}`, key: src },
          e("img", { src, alt: `Woodpacker image placeholder ${index + 1}` }),
          e("figcaption", null, ["Arrival energy", "Common room conversations", "Dorm comfort", "Private stay calm", "Shared corners", "Slow mornings"][index])
        ))
      )
    )
  );
}

function EventCards() {
  return e("section", { className: "section" },
    e("div", { className: "container" },
      e(SectionIntro, {
        eyebrow: "Weekly rhythm",
        title: "Experiences that make the hostel feel alive.",
        copy: "The calendar should feel curated, not crowded: a mix of social nights, local discovery, wellness, and creative expression."
      }),
      e("div", { className: "event-grid" },
        events.map(item => e("article", { className: "event-card", key: item.title },
          e("div", { className: "icon-chip" }, e(Icon, { name: item.icon })),
          e("p", { className: "cadence" }, item.cadence),
          e("h3", null, item.title),
          e("p", null, item.copy)
        ))
      )
    )
  );
}

function WorkationPage() {
  return e(React.Fragment, null,
    e(PageHero, { data: pageData.workation }),
    e("section", { className: "section" },
      e("div", { className: "container split-section" },
        e("div", null,
          e(SectionIntro, {
            eyebrow: "For digital nomads",
            title: "A better base for people building something from the road.",
            copy: "Woodpacker speaks to remote professionals who care about more than a desk. They need reliability, community, a sense of place, and a stay that respects both focus and freedom."
          }),
          e("a", { href: "#booking", className: "btn btn-primary" }, "Ask about long stays")
        ),
        e("div", { className: "benefit-grid" },
          workationBenefits.map(item => e("article", { className: "benefit", key: item.title },
            e("h3", null, item.title),
            e("p", null, item.copy)
          ))
        )
      )
    ),
    e(CTA, {
      title: "Stay long enough to find your rhythm.",
      copy: "Create weekly and monthly inquiry flows in Supabase later for long-stay availability, preferred work setup, and guest profile notes.",
      label: "Request workation rates"
    })
  );
}

function RoomsPage() {
  return e(React.Fragment, null,
    e(PageHero, { data: pageData.rooms }),
    e("section", { className: "section" },
      e("div", { className: "container" },
        e(SectionIntro, {
          eyebrow: "Choose your stay",
          title: "Rooms built around how people actually travel.",
          copy: "The accommodation page now gives clear choices while keeping the emotional brand voice intact."
        }),
        e("div", { className: "room-grid" },
          rooms.map(room => e("article", { className: "room-card", key: room.title },
            e("img", { src: room.image, alt: `${room.title} at Woodpacker` }),
            e("div", { className: "room-content" },
              e("p", { className: "price" }, room.price),
              e("h3", null, room.title),
              e("p", null, room.copy),
              e("div", { className: "tag-row" }, room.tags.map(tag => e("span", { key: tag }, tag))),
              e("a", { href: "#booking", className: "text-link" }, "Check this stay")
            )
          ))
        )
      )
    )
  );
}

function LocalPage() {
  return e(React.Fragment, null,
    e(PageHero, { data: pageData.pondicherry }),
    e("section", { className: "section" },
      e("div", { className: "container destination-layout" },
        e("div", { className: "destination-copy" },
          e("p", { className: "eyebrow" }, "Destination storytelling"),
          e("h2", null, "Sell the place, then give guests a way into it."),
          e("p", null, "Woodpacker should become the guest's Pondicherry compass: what to do, where to slow down, how to travel respectfully, and which local experiences make the stay memorable.")
        ),
        e("div", { className: "highlight-grid" },
          localHighlights.map(item => e("article", { className: "highlight", key: item.title },
            e("h3", null, item.title),
            e("p", null, item.copy)
          ))
        )
      )
    ),
    e(CTA, {
      title: "Let Pondicherry be more than a stopover.",
      copy: "Use this page later for local guide posts, partner experiences, maps, and Supabase-powered destination content."
    })
  );
}

function StoriesPage() {
  return e(React.Fragment, null,
    e(PageHero, { data: pageData.stories }),
    e("section", { className: "section magazine" },
      e("div", { className: "container" },
        e(SectionIntro, {
          eyebrow: "Travel magazine",
          title: "Stories with texture, not just updates.",
          copy: "This page is designed for future editorial posts, guest interviews, reels, and newsletter-friendly storytelling."
        }),
        e("div", { className: "magazine-grid" },
          stories.map((story, index) => e("article", { className: `magazine-card story-${index + 1}`, key: story.title },
            e("span", null, story.category),
            e("h3", null, story.title),
            e("p", null, story.copy),
            e("a", { href: "#booking", className: "text-link" }, "Read the mood")
          ))
        )
      )
    )
  );
}

function AboutPage() {
  return e(React.Fragment, null,
    e(PageHero, { data: pageData.about }),
    e("section", { className: "section" },
      e("div", { className: "container manifesto" },
        e("p", { className: "eyebrow" }, "Brand mission"),
        e("h2", null, "Woodpacker is for travelers who want independence without isolation."),
        e("p", null, "We create stays where people can arrive as they are: curious, tired, excited, uncertain, solo, in pairs, or with a group. The brand is built on four promises: freedom to explore, care without fuss, social warmth without pressure, and a deeper relationship with Pondicherry."),
        e("div", { className: "principle-row" },
          ["Community", "Freedom", "Exploration", "Human connection"].map(word => e("span", { key: word }, word))
        )
      )
    ),
    e(CTA, {
      title: "Make the hostel feel like the beginning of the trip.",
      copy: "Every page now pushes Woodpacker toward a premium, experience-led identity while preserving its approachable hostel soul."
    })
  );
}

function CommunityPage() {
  return e(React.Fragment, null,
    e(PageHero, { data: pageData.community }),
    e(StoryCards),
    e(Testimonials),
    e(Gallery),
    e(CTA, {
      title: "Come for Pondicherry. Stay for the people you did not expect to meet.",
      copy: "Invite guests into the social life of the hostel before they ever arrive."
    })
  );
}

function EventsPage() {
  return e(React.Fragment, null,
    e(PageHero, { data: pageData.events }),
    e(EventCards),
    e(Gallery, { title: "Experience gallery", copy: "Use this section for owned photography from rooftops, music nights, cultural walks, yoga mornings, surf trips, and community dinners." }),
    e(CTA, {
      title: "Build your week around small, memorable moments.",
      copy: "Guests can book a bed and discover a calendar that makes Pondicherry easier to enter."
    })
  );
}

function HomePage() {
  return e(React.Fragment, null,
    e(PageHero, { data: pageData.home }),
    e("section", { className: "section" },
      e("div", { className: "container brand-promise" },
        e(SectionIntro, {
          eyebrow: "A better hostel promise",
          title: "Woodpacker is not only where guests sleep. It is how they enter Pondicherry.",
          copy: "The refreshed website positions the brand around community, experience, long-stay ease, and destination storytelling."
        }),
        e("div", { className: "promise-grid" },
          [
            ["Community-first", "Common spaces, dinners, guest stories, and social rituals that make connection feel easy."],
            ["Experience-led", "Events, walks, workshops, surf trips, music, movie nights, and local discovery."],
            ["Workation-ready", "A clear offer for remote professionals looking for focus, friendships, and balance."],
            ["Destination-rich", "Pondicherry becomes part of the product, not a footnote under location."]
          ].map(item => e("article", { className: "promise", key: item[0] }, e("h3", null, item[0]), e("p", null, item[1])))
        )
      )
    ),
    e(EventCards)
  );
}

function BookingSection() {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setMessage(`Thanks, ${data.name || "traveler"}. Your ${data.stayType} inquiry is ready for the Woodpacker team. This form is structured for a future Supabase booking_requests insert.`);
    form.reset();
  }

  return e("section", { className: "section booking-section", id: "booking" },
    e("div", { className: "container booking-panel" },
      e("div", { className: "booking-copy" },
        e("p", { className: "eyebrow" }, "Booking inquiry"),
        e("h2", null, "Tell us the shape of your stay."),
        e("p", null, "This inquiry form is built to collect the same fields a Supabase backend will need later: dates, stay type, guest count, contact details, and intent."),
        e("div", { className: "contact-stack" },
          e("span", null, e(Icon, { name: "fa-phone" }), "+91 123 456 7890"),
          e("span", null, e(Icon, { name: "fa-envelope" }), "info@woodpackerhostel.com"),
          e("span", null, e(Icon, { name: "fa-location-dot" }), "Woodpacker Hostel, Pondicherry / Auroville")
        )
      ),
      e("form", { className: "booking-form", onSubmit: handleSubmit },
        e("label", null, "Check-in", e("input", { type: "date", name: "checkin", min: today, required: true })),
        e("label", null, "Check-out", e("input", { type: "date", name: "checkout", min: today, required: true })),
        e("label", null, "Stay type", e("select", { name: "stayType", required: true },
          ["Social dorm", "Female dorm", "Private room", "Group stay", "Long-stay workation"].map(item => e("option", { key: item, value: item }, item))
        )),
        e("label", null, "Guests", e("select", { name: "guests", required: true },
          ["1", "2", "3", "4", "5+"].map(item => e("option", { key: item, value: item }, item))
        )),
        e("label", null, "Name", e("input", { type: "text", name: "name", placeholder: "Your name", required: true })),
        e("label", null, "Email", e("input", { type: "email", name: "email", placeholder: "you@example.com", required: true })),
        e("label", { className: "wide" }, "Travel note", e("textarea", { name: "note", rows: 4, placeholder: "Solo trip, workation, group stay, event interest..." })),
        e("button", { className: "btn btn-primary wide", type: "submit" }, "Send inquiry"),
        message && e("p", { className: "form-message" }, message)
      )
    )
  );
}

function Footer() {
  return e("footer", { className: "footer" },
    e("div", { className: "container footer-grid" },
      e("div", null,
        e("div", { className: "brand footer-brand" }, e("span", { className: "brand-mark" }, "WP"), e("span", { className: "brand-copy" }, e("strong", null, "Woodpacker"), e("small", null, "Hostel Pondicherry"))),
        e("p", null, "An experience-led hostel for travelers, remote workers, friends, and first-time Pondicherry explorers.")
      ),
      e("div", null,
        e("h3", null, "Explore"),
        navItems.slice(1).map(item => e("a", { key: item.path, href: `#/${item.path}` }, item.label))
      ),
      e("div", null,
        e("h3", null, "For the next phase"),
        e("p", null, supabaseReady.note),
        e("small", null, `Suggested tables: ${supabaseReady.tables.join(", ")}.`)
      )
    )
  );
}

function App() {
  const [route, setRoute] = useState(currentRoute());
  useEffect(() => {
    const update = () => {
      setRoute(currentRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", update);
    if (!window.location.hash) window.location.hash = "#/home";
    return () => window.removeEventListener("hashchange", update);
  }, []);

  useEffect(() => {
    const handleBookingClick = event => {
      const link = event.target.closest('a[href="#booking"]');
      if (!link) return;
      event.preventDefault();
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", handleBookingClick);
    return () => document.removeEventListener("click", handleBookingClick);
  }, []);

  const pages = {
    home: e(HomePage),
    community: e(CommunityPage),
    events: e(EventsPage),
    workation: e(WorkationPage),
    rooms: e(RoomsPage),
    pondicherry: e(LocalPage),
    stories: e(StoriesPage),
    about: e(AboutPage)
  };

  return e(React.Fragment, null,
    e(Header, { route, onNavigate: setRoute }),
    e("main", null, pages[route] || pages.home),
    e(BookingSection),
    e(Footer),
    e("a", { className: "floating-book", href: "#booking" }, "Book")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(e(App));
