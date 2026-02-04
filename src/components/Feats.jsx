// import React from 'react'
// import './Feats.css'
// import SocialIcons from './SocialIcons'

// const featsData = [
//   {
//     title: 'LeetCode Profile',
//     hashtags: ['#Code', '#Cpp', '#faang'],
//     date: '2024',
//     label: 'Code',
   
//   },
//   {
//     title: 'GeeksForGeeks',
//     hashtags: ['#Coding', '#Cpp', '#Java'],
//     date: '2024',
//     label: 'GFG',
//   },
//   {
//     title: 'Skillrack Profile',
//     hashtags: ['#Code', '#Learn'],
//     date: '2022',
//     label: 'Skillrack',
//   },
  
// ]

// const Feats = ({ onBack }) => {
//   return (
//     <div className="feats-page">
//       {/* Background texture & watermark */}
//       <div className="feats-texture" aria-hidden="true" />
//       <div className="feats-watermark">FEATURES</div>

//       {/* Header */}
//       <div className="feats-top-left">
//         <span className="feats-logo">Sanjay</span>
//       </div>

//       <button className="feats-back-button" onClick={onBack} aria-label="Go back">
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M19 12H5M12 19l-7-7 7-7" />
//         </svg>
//       </button>

//       {/* Social sidebar */}
//       <div className="feats-social-sidebar">
//         <SocialIcons />
//       </div>

     

//       {/* Cards grid */}
//       <div className="feats-grid">
//         {featsData.map((feat, index) => (
//           <article key={index} className="feats-card">
//             <div className="feats-card-image">
//               <div className="feats-card-image-label">{feat.label}</div>
//             </div>
//             <h2 className="feats-card-title">{feat.title}</h2>
//             <div className="feats-card-tags">
//               {feat.hashtags.map((tag) => (
//                 <span key={tag} className="feats-tag">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <div className="feats-card-footer">
//               <span className="feats-card-date">{feat.date}</span>
//             </div>
//           </article>
//         ))}
//       </div>
      
//     </div>
//   )
// }

// export default Feats




import React from 'react'
import './Feats.css'
import SocialIcons from './SocialIcons'

const featsData = [
  {
    title: 'LeetCode Profile',
    hashtags: ['#Code', '#Cpp', '#FAANG'],
    date: '2024',
    label: 'LeetCode',
    image: 'https://leetcard.jacoblin.cool/sanjuzzz28?theme=dark&font=Inter',
    link: 'https://leetcode.com/sanjuzzz28/',
  },
  {
    title: 'GeeksForGeeks',
    hashtags: ['#Coding', '#Cpp', '#Java'],
    date: '2024',
    label: 'GFG',
    image: 'https://gfgstatscard.vercel.app/sanjuzzz28', // GFG has no official stats card
    link: 'https://www.geeksforgeeks.org/profile/sanjuzzz28',
  },
  {
    title: 'Skillrack Profile',
    hashtags: ['#Code', '#Learn'],
    date: '2022',
    label: 'Skillrack',
    image: null,
    link: 'https://www.skillrack.com/faces/resume.xhtml?id=404172&key=ab23aa7675e7552a7e312e27e31190a671ba3b0d',
  },
]

const Feats = ({ onBack }) => {
  return (
    <div className="feats-page">
      {/* Background texture & watermark */}
      <div className="feats-texture" aria-hidden="true" />
      <div className="feats-watermark">FEATURES</div>

      {/* Header */}
      <div className="feats-top-left">
        <span className="feats-logo">Sanjay</span>
      </div>

      <button
        className="feats-back-button"
        onClick={onBack}
        aria-label="Go back"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Social sidebar */}
      <div className="feats-social-sidebar">
        <SocialIcons />
      </div>

      {/* Cards grid */}
      <div className="feats-grid">
        {featsData.map((feat, index) => (
          <article
            key={index}
            className="feats-card"
            onClick={() => feat.link && window.open(feat.link, '_blank')}
            style={{ cursor: feat.link ? 'pointer' : 'default' }}
          >
            {/* Image / Stats */}
            <div className="feats-card-image">
              {feat.image ? (
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="feats-card-stats-img"
                  loading="lazy"
                />
              ) : (
                <div className="feats-card-image-label">{feat.label}</div>
              )}
            </div>

            {/* Title */}
            <h2 className="feats-card-title">{feat.title}</h2>

            {/* Tags */}
            <div className="feats-card-tags">
              {feat.hashtags.map((tag) => (
                <span key={tag} className="feats-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="feats-card-footer">
              <span className="feats-card-date">{feat.date}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Feats