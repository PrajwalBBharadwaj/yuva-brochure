import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const stories = [
  {
    id: 'krodha',
    name: 'Krodha',
    meaning: 'Wrath',
    title: 'Muruga and the Fruit of Knowledge',
    color: '#a93638',
    soft: '#f4d6d2',
    symbol: 'क्रोध',
    motif: 'trident',
    paragraphs: [
      'Narada proposes a fruit that gives the person who consumes it spiritual wisdom. Now this fruit can only be given to one person so to decide who gets it, they initiate a competition where the person who circles the world three times is given the fruit.',
      'Ganeshia ends up winning the competition, by going around Shiva and Parvati three times which enrages Muruga. Muruga then rushes to Mount Pazhani where he is in isolation and expresses his rage.'
    ]
  },
  {
    id: 'lobha',
    name: 'Lobha',
    meaning: 'Greed',
    title: "Duryodhan's Dice Game",
    color: '#a87516',
    soft: '#f4e6bd',
    symbol: 'लोभ',
    motif: 'lotus',
    paragraphs: [
      "Lobha is all about Duryodhan's greed. With every bet that he wins in the dice game, he gets greedier and greedier with every other bet.",
      'The Lobha scene starts with all his soldiers celebrating Duryodhan. They will all say, “Oh Duryodhan, you are so great: you are powerful, energetic, enigmatic, the bravest, and the strongest soldier in all the three worlds. You can defeat anyone because you are victorious.” They keep celebrating Jay Jay Duryodhan every time.',
      "Suddenly he is reminded of his past. He thinks about the delusional palace Maya Sabha. He thinks there is land and there are pillars but it suddenly keeps shifting because it's all a delusional palace. That's why when he thinks that it is land and he steps on it, it becomes sudden water and then he falls into the water. That is when he hears Draupadi's laughter so his ego is hurt.",
      'One day he says, “I will take everything from these Pandavas.” That is the promise that he keeps for himself. Suddenly the scene shifts to Indraprastha, where he sees all the Pandavas building the kingdom right from scratch, building all the happiness, gaining wealth, health, and power in their kingdom. They protect and they give arms to the people and all this goodness of all these Pandavas cannot be tolerated by Duryodhan. He gets so jealous that one day he promises to himself again that he wants to snatch everything from these Pandavas.',
      'Then Shakuni enters, where he very cunningly and surreptitiously comes to Duryodhan in his weak moment. He says, “Don’t worry Duryodhan, I am there for you. Just call the Pandavas to a nice friendly dice game and I will win everything that the Pandavas have for you.”',
      'Duryodhan is lured into calling the Pandavas to the dice game and suddenly the mood shifts to the present, where Yudhishthira, Duryodhan, and Shakuni are playing the dice game in the present. With every other betting, they will start with something small. They will start with a necklace, a very small thing. Duryodhan wins. The bet increases to gold coins. Duryodhan wins. There are chariots. Duryodhan wins again. There are elephants, horses, and armies, and Indraprastha itself, and Duryodhan wins everything that the Pandavas have.',
      'Now he will say, “Pandavas, give yourselves to me,” which means all five of you brothers are my slaves. Finally after contemplating so much, when Yudhishthira plays this game of dice again, he loses. All five brothers will become Duryodhan’s slaves.',
      'Finally Duryodhan’s greed doesn’t stop there. He remembers Draupadi’s laughter now. Now he wants Draupadi also to be a winning bet. He will say, “Give me Draupadi now that you all are my slaves.”',
      'This is the greed of Duryodhan, which keeps increasing and increasing and increasing in a very unhealthy manner. In the end the greed is not that really good. Therefore every other negative emotion has to meet its consequence. In a similar way Duryodhan also has to meet his consequence. While in the Kurukshetra war, when going against Bhima, he will finally face his wrath to his thighs because he would have invited Draupadi to sit on his thighs. That is where he will get his consequence: Bhima hits Duryodhan’s thighs and he will break his ego, shatter his pride, and just finish Duryodhan. Such will be the consequence of the negative emotion greed.'
    ]
  },
  {
    id: 'kama',
    name: 'Kama',
    meaning: 'Desire',
    title: 'Vedavati and Ravana',
    color: '#9d3f68',
    soft: '#f1d6e1',
    symbol: 'काम',
    motif: 'flame',
    paragraphs: [
      'Vedavati is a beautiful divine woman who has sworn to celibacy. She is a Vishnu devotee. She is very knowledgeable. She has a lot of wisdom. She is the most radiant because she does meditation, etc.',
      'Then there is Ravana, who is the demon king. While strolling in the jungle in a forest, he looks at Vedavati for the first time and is taken by her beauty. He is madly attracted to her and he is trying to decide whether to approach her or not, to talk to her or not. In all of that he first decides not to talk to her and go about his day.',
      'The sun sets down and the night is up. He is sleeping. He has a dream in his sleep about Vedavati and Ravana coming together. They are getting close. He is still admiring her. He is not able to think about anything else. Then he suddenly abruptly wakes up from that thought. He is wondering to himself, “I have only met this woman once. Why am I getting these dreams and why am I so affected by not being able to talk to her?” Then he shrugs off that thought and he goes back to sleep again.',
      'He tries to sleep again. The dream continues in his sleep to his amusement. He is again thinking about her, again thinking about how it would feel to be with her and how it would feel to be in her presence. Again he is abruptly stopped and he wakes up from his dream. This time he is wondering how this is affecting him and he really wants to talk to her. That desire is creeping in but he also knows his morals and his standards so he doesn’t want to break any rules and be disrespectful of the other unknown woman. He tries to control himself. He tries to retain his dignity and falls back to sleep.',
      'The dream continues and this time it is more of a lust. He physically is attracted to her. He is physically wanting to explore her and this desire of being in her presence just takes over. He wakes up from that dream and he is all the more sure that he now actually wants to approach her. He goes to approach her. He introduces himself to her and confesses his feelings and his desire to have her in his life.',
      'She politely refuses. She tells him that she cannot marry anybody, as she has sworn to celibacy and she is a Vishnu bhakta. She has to do her penance for moksha, Mukhya Prapty, and to be able to be with the Almighty that she has been praying for all her life. She goes back to her meditation.',
      'But Ravana, Ravana being the Ravana he is, being the egoistic arrogant man that he is, is offended by the fact that she refused to be with him. In that anger, in that frustration, he goes and touches her and that makes her angry. She is now offended: how can this man come and just randomly touch her and force himself on her? She curses Ravana. She tells him that he has crossed his boundary and he cannot do that and now she’ll have to sacrifice herself. She will make sure that she becomes the reason for his death and she curses at him and then she jumps into the sacred fire. That's the whole story.'
    ]
  },
  {
    id: 'matsara',
    name: 'Matsara',
    meaning: 'Jealousy',
    title: 'Kaikeyi and the Poisoned Mind',
    color: '#44735d',
    soft: '#dbe9df',
    symbol: 'मत्सर',
    motif: 'mirror',
    paragraphs: [
      'This is a story of jealousy through the eyes of Kaike. Kaike is pacing in her quarters, waiting for news about the king’s health. Then a maid approaches her and tells her that the king has passed away. This sends Kaike into a whirlwind where she starts reflecting on all of her actions in the past.',
      'As she is reminiscing she comes across a mirror where she’s forced to look at her own reflection. There she sees herself telling her that she’s the one who killed the king and she’s the one who sent Rama away to Vanavasam, or to exile. Being forced to confront these feelings causes her to question how she even got to this point as she reminisces about happy times.',
      "She's pulled into a happy childhood memory of drama when she plays with him and has good memories with Kausalya, Rama's mom. As a happy memory passes she's brought to a new memory: the day of Rama's coronation, where she excitedly is getting ready in front of the mirror on the special day. Mandara comes up to her and asks her why she's so happy. She looks at Manthara and says, “Today is Rama's coronation. Why wouldn't I be so happy?”",
      'Manthara then begins to poison her mind by telling her, “Your life will be over if Bharata is crowned king. Your life is about to be ruined. Everything is going to change. Kausalya will start treating you differently. You’ll be a maid to Rama, forced to serve and attend to his feet day in and day out.”',
      'This moment of turmoil pushes Kaike into rageful vengeance, where she thinks quickly and decides to ask for the two boons that King Dasharatha gave her long ago. She demands that her son, Bharata, be crowned king and Rama be sent away to Vanavasam.',
      'As she revels in the glory of what she has done, suddenly she’s pulled back into the present, watching herself in real time, devastated by what she has done. She then realizes that she has created this fate that she’s living because Rama was sent away and because of her the king has died. She crumbles to the floor and cries but there’s nothing she can do.'
    ]
  },
  {
    id: 'moha',
    name: 'Moha',
    meaning: 'Delusion / Attachment',
    title: 'The Sacred Veil',
    color: '#514d87',
    soft: '#deddf0',
    symbol: 'मोह',
    motif: 'veil',
    paragraphs: [
      'Confined to the quiet ache of her bedchamber while a storm rages outside, Radha surrenders to Moha—the all-consuming attachment that bends reality. Through the fluid, circular cadence of Manipuri dance, her isolation transforms into a waking trance.',
      'Every flash of lightning against the window, roll of distant thunder, and rustle of fabric breathes with the phantom presence of Krishna. Radha does not merely wait in loneliness; driven by pure yearning, she conjures Him out of air, rain, and memory. As the emotive arc of Raag Bhairavi deepens and the rhythm accelerates toward an ecstatic peak, the walls of the room dissolve into sacred hallucination—leaving the space suspended between presence and projection, where devotion becomes indistinguishable from delusion.'
    ]
  },
  {
    id: 'mada',
    name: 'Mada',
    meaning: 'Pride / Ego',
    title: 'Bhasmasura and the Boon',
    color: '#b45b2b',
    soft: '#f2dccb',
    symbol: 'मद',
    motif: 'chakra',
    paragraphs: [
      'This is the story of Bhasmasura who by his ego sought power and finally led to his destruction. The piece starts with the Mahakala Bhairava Ashtakam. Bhasmasura does penance and gets the darshan of Shiva.',
      'Shiva asks Basmasara what he wants. Basmasura says, I need a boon where if I place my hand on anyone, that person will turn into ashes. Shiva is initially apprehensive of this boon and doesn’t agree to give him. But Basmasura tricks Shiva, saying that aren’t you the Bholanath Who grants his devotees whatever they ask for. Shiva doesn’t have an option but to agree to it.',
      'But Vasmasura attempts to try this boon on Shiva by placing his hand on Shiva himself. So he ends up chasing Shiva. That is when the Dhava Bhasma piece will be played. The gods seek help of Vishnu who comes down to earth in the form of Mohini beautiful woman Basmasura is bewitched by her beauty.',
      'Mohini lures Bhasmasura into a dance contest. Bhasmasura starts dancing aggressively without the knowledge of his boon. At the end, Mohini intentionally does a step where she places her hand on top of her head. Vasmasura who is so much blinded by his ego does the same and is reduced to his ashes because of his own boon.',
      'Never be consumed by your ego that you have power else it will reduce you to ashes.'
    ]
  }
];

function Rangoli({ motif }) {
  return (
    <div className={`rangoli rangoli-${motif}`} aria-hidden="true">
      <span className="petal p1"/><span className="petal p2"/><span className="petal p3"/><span className="petal p4"/>
      <span className="ring"/><span className="dot d1"/><span className="dot d2"/><span className="dot d3"/><span className="dot d4"/>
      <span className="center">{motif === 'trident' ? 'ॐ' : motif === 'lotus' ? '✦' : motif === 'flame' ? '◈' : motif === 'mirror' ? '◉' : motif === 'veil' ? '❋' : '✥'}</span>
    </div>
  );
}

function Section({ story, index }) {
  return (
    <section id={story.id} className="story" style={{ '--accent': story.color, '--soft': story.soft }}>
      <div className="texture" />
      <div className="story-inner">
        <Rangoli motif={story.motif} />
        <div className="story-topline">
          <span>0{index + 1}</span>
          <span className="line" />
          <span>{story.meaning}</span>
        </div>
        <div className="hero-copy">
          <div className="sanskrit">{story.symbol}</div>
          <h2>{story.name}</h2>
          <p className="emotion">{story.meaning}</p>
          <div className="ornament">❈ &nbsp; ❈ &nbsp; ❈</div>
          <h3>{story.title}</h3>
        </div>
        <article className="story-card">
          <div className="card-label">THE STORY</div>
          {story.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>
        <a className="next-link" href={index === stories.length - 1 ? '#top' : `#${stories[index + 1].id}`}>
          {index === stories.length - 1 ? 'Return to beginning' : `Continue to ${stories[index + 1].name}`} <span>↓</span>
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <main id="top">
      <nav className="nav" aria-label="Story navigation">
        <a href="#top" className="brand">षड् भावाः</a>
        <div className="nav-links">
          {stories.map((story) => <a key={story.id} href={`#${story.id}`}>{story.name}</a>)}
        </div>
      </nav>

      <header className="cover">
        <div className="cover-mandala" aria-hidden="true">
          <div className="mandala-inner">षड्<br/><span>भावाः</span></div>
        </div>
        <div className="cover-copy">
          <p className="eyebrow">A PERFORMANCE BROCHURE</p>
          <h1>Six<br/><em>Emotions</em></h1>
          <p className="dek">Six stories. Six states of the human mind. Each one carried to the edge, just before consequence.</p>
          <a href="#krodha" className="begin">Begin the journey <span>↓</span></a>
        </div>
        <div className="cover-footer"><span>कथा</span><span>रस</span><span>भाव</span></div>
      </header>

      {stories.map((story, index) => <Section story={story} index={index} key={story.id} />)}

      <footer className="footer">
        <div className="footer-motif">✥</div>
        <p>Six emotions, six stories, one journey inward.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
