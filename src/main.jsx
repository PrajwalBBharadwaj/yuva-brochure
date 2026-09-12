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
      'Narada proposes a divine fruit that grants spiritual wisdom to whoever consumes it. Since the fruit can be given to only one person, Shiva and Parvati announce a competition: whoever circles the world three times will receive the fruit. Muruga immediately accepts the challenge and sets off, determined to win.',
      'But Ganeshia finds another path to victory. He circles Shiva and Parvati three times, explaining that his parents are his entire world. He is therefore declared the winner. When Muruga returns and learns what has happened, he feels betrayed and furious. The victory that he believed was rightfully his has been taken away from him.',
      'Consumed by anger, Muruga leaves Mount Kailash and retreats to Pazhani. Away from everyone, he gives himself completely to his wrath. His anger becomes isolation, his frustration becomes silence, and his hurt becomes a powerful inner fire. At the peak of Krodha, he stands alone, consumed by the feeling that he has been wronged.'
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
      'Confined to the quiet ache of her bedchamber while a storm rages outside, Radha surrenders to Moha, an attachment so powerful that it begins to bend reality. Through the fluid circular movements of Manipuri dance, her loneliness slowly transforms into a waking trance. She waits for Krishna, but the longer she waits, the less certain she becomes of what is real.',
      'Every flash of lightning, every roll of thunder, and every movement of fabric begins to carry the presence of Krishna. Radha no longer simply remembers him; she begins to see him everywhere. Rain becomes his presence, the wind becomes his touch, and the empty room begins to feel occupied. Her yearning transforms memory into something almost tangible.',
      'As Raag Bhairavi deepens and the rhythm accelerates, Radha becomes completely immersed in this imagined presence. The walls of the room seem to dissolve, and devotion becomes indistinguishable from projection. At the peak of Moha, she is suspended between reality and illusion, unable to separate the Krishna she longs for from the Krishna she has created within her own mind.'
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
      'Vedavati is a radiant and deeply devoted woman who has sworn herself to celibacy and dedicated her life to Vishnu. She spends her time in meditation and penance, seeking spiritual fulfillment. One day, Ravana encounters her while travelling through the forest. Struck immediately by her beauty, he cannot stop thinking about her. He initially chooses to walk away, but the image of Vedavati follows him into the night.',
      'As Ravana sleeps, he dreams of her. He wakes suddenly, confused by how deeply a woman he has met only once has affected him. He tries to dismiss the thought and sleep again, but the dream returns. Each time it becomes more consuming. His admiration turns into longing, and longing begins to overpower his judgment. Eventually, he decides that he must approach her and confess his feelings.',
      'Vedavati politely refuses. She explains that she has chosen a life of celibacy and devotion and cannot marry him. Ravana, unable to accept rejection, becomes angry and his desire turns into entitlement. He crosses her boundary and touches her without permission. Outraged, Vedavati curses him, declaring that she will become the cause of his destruction. She then enters the sacred fire, leaving Ravana consumed by the very desire that he could not control.'
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
      'Bhasmasura performs intense penance and receives the darshan of Shiva. When Shiva asks what boon he desires, Bhasmasura asks for the power to turn anyone into ashes simply by placing his hand upon them. Shiva hesitates, sensing the danger in such a gift. But Bhasmasura challenges him, reminding him that he is Bholanath, the compassionate Lord who grants his devotees what they ask for. Shiva finally agrees.',
      'The moment Bhasmasura receives the boon, his pride takes control. Instead of being grateful, he becomes intoxicated by his newfound power and attempts to place his hand upon Shiva himself. Shiva is forced to flee as Bhasmasura chases him. The gods seek Vishnu’s help, and Vishnu appears as Mohini, whose beauty immediately captivates Bhasmasura.',
      'Mohini challenges him to a dance, and Bhasmasura eagerly follows her every movement. His ego is so complete that he forgets the danger of his own boon. Finally, Mohini places her hand upon her own head. Without thinking, Bhasmasura imitates her and places his hand on his head. His own power destroys him. At the peak of Mada, the very power he was proud of becomes the cause of his destruction.'
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
      'Duryodhan is surrounded by soldiers who celebrate him as powerful, victorious, energetic, and capable of defeating anyone. Yet beneath the praise lies an old wound. He remembers the Maya Sabha at Indraprastha, where the palace itself seemed to shift beneath him. What he believed was solid ground became water, and he fell as Draupadi laughed. His pride was wounded, and that humiliation stayed with him.',
      'He watches the Pandavas build Indraprastha from nothing, gaining wealth, strength, prosperity, and the love of their people. Unable to tolerate their success, he makes a promise to himself: he will take everything from them. Shakuni recognizes this weakness and offers him a solution. Invite the Pandavas to a friendly game of dice, he says, and I will win everything for you.',
      'The game begins with small stakes: a necklace, then gold, chariots, horses, elephants, armies, and finally Indraprastha itself. Each victory only makes Duryodhan want more. He demands that the Pandavas wager themselves, and Yudhishthira loses again. Now all five brothers are his slaves. But even that is not enough. Remembering Draupadis laughter, Duryodhana demands her as the final prize. His greed has crossed every boundary, and he stands at the peak of Lobha, wanting to possess everything that once belonged to others.'
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
      'Kaikeyi paces through her quarters, waiting for news about King Dasharatha. A maid arrives with the news that the king has died. Shocked, Kaikeyi is drawn toward a mirror, where she is forced to confront her own reflection. In it, she sees the consequences of her actions: the king is dead, Rama has been sent into exile, and her own decisions have brought her to this moment.',
      'Her memories carry her back to happier times. She remembers her childhood, her affection for Rama, and her friendship with Kausalya. Then she remembers the day of Rama’s coronation, when she was genuinely joyful. Manthara approaches her and begins planting fear in her mind. She tells Kaikeyi that once Rama becomes king, Bharata will lose everything and Kaikeyi herself will become powerless, forced to serve Rama and Kausalya.',
      'The fear slowly becomes jealousy, and jealousy becomes vengeance. Kaikeyi remembers the two boons promised to her by Dasharatha and demands that Bharata be made king and Rama be sent into Vanavasam. For a moment she revels in what she believes she has achieved. Then she is pulled back into the present, where the reality of her actions finally reaches her. The king is dead, Rama is gone, and she has created the fate she now cannot escape.'
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
