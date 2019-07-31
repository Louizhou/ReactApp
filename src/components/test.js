import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
 
function MyPicture(props) {
  return (
    <div>
      <p>Why Early Access?
“After we revealed the initial game design concept, we received a ton of interest from players around the world. We have been developing the game throughout this last year, but we are still working on creating more content in PvP, PvE, Classes, and additional game systems. By releasing in Early Access, we hope to hear feedback from players and make further improvements as needed to further expand and polish the definitive, final version of Kurtzpel that our players are looking forward to playing.”
Approximately how long will this game be in Early Access?
“We plan to release the full version within 2019. We will continue to develop the game based on our roadmap. Player feedback and the data Early Access will provide will be very helpful in empowering us to make the best game possible.”
How is the full version planned to differ from the Early Access version?
“"During Early Access, additional classes, new PvP and PvE content will be added; leading up to the full version release. We will also be working on bug fixes. 
The planned, final version will contain the following:
- More Classes and related skills
- Heroic NPCs for players to engage with, their respective rewards and new PvE content
- A new multiplayer PvP mode
- New PvP Rank-based systems and related content
- Custom interactions with Heroic NPCs
- Better class balance and quality of life improvements (based on player feedback)"”</p>
 
      <ImageZoom
        image={{
          src: 'http://picsum.photos/id/201/100',
          alt: 'Golden Gate Bridge',
          className: 'img',
          style: { width: '50em' }
        }}
        zoomImage={{
          src: 'http://picsum.photos/id/201/1000/500',
          alt: 'Golden Gate Bridge'
        }}
      />
 
      <p>19. We will continue to develop the game based on our roadmap. Player feedback and the data Early Access will provide will be very helpful in empowering us to make the best game possible.” How is the full version planned to differ from the Early Access version? “"During Early Access, additional classes, new PvP and PvE content will be added; leading up to the full version release. We will also be working on bug fixes. The planned, final version will contain the following: - More Classes and related skills - Heroic NPCs for players to engage with, their respective rewards and new PvE content - A new multiplayer PvP mode - New PvP Rank-based systems and related content - Custom interactions with Heroic NPCs - Better class balance and quality of life improvements (based on player feedba</p>
    </div>
  )
}

export default MyPicture