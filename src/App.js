import React, { Component } from 'react'
// import img1 from "./components/music.gif"
import song from "./components/monstarcat.mp3"
import playImg from "./components/Favicons/play.png"
import pauseImg from "./components/Favicons/pause.png"
import "./App.css"
import song2 from "./components/Musics/Barren Gates  M.I.M.E - Enslaved [NCS Release].mp3"
import song3 from "./components/Musics/Cartoon-Why_We_Lose_feat_Coleman_TrappNCS_Release_b128f0d217.mp3"
import song4 from "./components/Musics/Clarx - H.A.Y _NCS Release_ ( 128kbps ).mp3"
import song5 from "./components/Musics/Dirty Palm - Oblivion (feat. Micah Martin) _NCS Release_ ( 128kbps ).mp3"
import song6 from "./components/Musics/Emdi x Coorby - Lonewolf (feat. Kristi-Leah) _NCS Release_ ( 128kbps ).m4a"
import song7 from "./components/Musics/Jo Cohen & Sex Whales - We Are _NCS Release_ ( 128kbps ).mp3"
import song8 from "./components/Musics/Kozah - Haha _NCS Release_ ( 128kbps ).mp3"
import song9 from "./components/Musics/Ship Wrek & Zookeepers - Ark _NCS Release_ ( 128kbps ).mp3"
import song10 from "./components/Musics/T-Mass - Ignoring My Heart _NCS Release_ ( 128kbps ).mp3"
import song11 from "./components/Musics/TULE - Fearless pt.II (feat. Chris Linton) [NCS Release].mp3"
import backImg2 from "./components/Images/back2.jpg"
import backImg3 from "./components/Images/back3.jpg"
import backImg4 from "./components/Images/back4.jpg"
import backImg5 from "./components/Images/back5.jpg"
import backImg6 from "./components/Images/back6.jpg"
import backImg7 from "./components/Images/back7.jpg"
import backImg8 from "./components/Images/back8.jpg"
import backImg9 from "./components/Images/back9.jpg"
import backImg10 from "./components/Images/back10.jpg"
import backImg11 from "./components/Images/back11.jpg"
// import backImg2 from "./components/Images/back2.jpg"
import imga from "./components/normal.png"
import { Typewriter } from "react-simple-typewriter"

export default class App extends Component {
  state = {
    audio: new Audio(song),
    audio2: new Audio(song2),
    audio3: new Audio(song3),
    audio4: new Audio(song4),
    audio5: new Audio(song5),
    audio6: new Audio(song6),
    audio7: new Audio(song7),
    audio8: new Audio(song8),
    audio9: new Audio(song9),
    audio10: new Audio(song10),
    audio11: new Audio(song11),
    playing: false,
  }
  musicplay = () => {
    let playing = this.state.playing
    document.querySelector(".mainBody").style.background = `url(${backImg11})`
    let logo = document.getElementById("logoChange")
    logo.src = imga
    logo.style.display = "block"
    if (playing) {
      this.state.audio.pause()
      document.querySelectorAll(".mainImg")[0].src = pauseImg
    } else {
      this.state.audio.play()
      document.querySelectorAll(".mainImg")[0].src = playImg
    }
    this.setState({ playing: !playing })
  }
  musicPlay2 = () => {
    document.querySelector(".mainBody").style.background = `url(${backImg2})`
    let logo = document.getElementById("logoChange")
    logo.src = imga
    logo.style.display = "block"
    let playing = this.state.playing
    if (playing) {
      this.state.audio2.pause()
      document.querySelectorAll(".mainImg")[1].src = pauseImg
    } else {
      this.state.audio2.play()
      document.querySelectorAll(".mainImg")[1].src = playImg
    }
    this.setState({ playing: !playing })
  }

  musicPlay3 = () => {
    document.querySelector(".mainBody").style.background = `url(${backImg3})`
    let logo = document.getElementById("logoChange")
    logo.src = imga
    logo.style.display = "block"
    let playing = this.state.playing

    if (playing) {
      this.state.audio3.pause()
      document.querySelectorAll(".mainImg")[2].src = pauseImg
    } else {
      this.state.audio3.play()
      document.querySelectorAll(".mainImg")[2].src = playImg
    }
    this.setState({ playing: !playing })
  }

  musicplay4 = () => {
    document.querySelector(".mainBody").style.background = `url(${backImg4})`
    let logo = document.getElementById("logoChange")
    logo.src = imga
    logo.style.display = "block"
    let playing = this.state.playing

    if (playing) {
      this.state.audio4.pause()
      document.querySelectorAll(".mainImg")[3].src = pauseImg
    } else {
      this.state.audio4.play()
      document.querySelectorAll(".mainImg")[3].src = playImg
    }
    this.setState({ playing: !playing })
  }

  musicplay5 = () => {
    document.querySelector(".mainBody").style.background = `url(${backImg5})`
    let logo = document.getElementById("logoChange")
    logo.src = imga
    logo.style.display = "block"
    let playing = this.state.playing

    if (playing) {
      this.state.audio5.pause()
      document.querySelectorAll(".mainImg")[3].src = pauseImg
    } else {
      this.state.audio5.play()
      document.querySelectorAll(".mainImg")[3].src = playImg
    }
    this.setState({ playing: !playing })
  }

  musicplay6 = () => {
    document.querySelector(".mainBody").style.background = `url(${backImg6})`
    let logo = document.getElementById("logoChange")
    logo.src = imga
    logo.style.display = "block"
    let playing = this.state.playing

    if (playing) {
      this.state.audio6.pause()
      document.querySelectorAll(".mainImg")[4].src = pauseImg
    } else {
      this.state.audio6.play()
      document.querySelectorAll(".mainImg")[4].src = playImg
    }
    this.setState({ playing: !playing })
  }

  musicplay7 = () => {
    document.querySelector(".mainBody").style.background = `url(${backImg7})`
    let logo = document.getElementById("logoChange")
    logo.src = imga
    logo.style.display = "block"
    let playing = this.state.playing

    if (playing) {
      this.state.audio7.pause()
      document.querySelectorAll(".mainImg")[5].src = pauseImg
    } else {
      this.state.audio7.play()
      document.querySelectorAll(".mainImg")[6].src = playImg
    }
    this.setState({ playing: !playing })
  }

  musicplay8 = () => {
    document.querySelector(".mainBody").style.background = `url(${backImg8})`
    let logo = document.getElementById("logoChange")
    logo.src = imga
    logo.style.display = "block"
    let playing = this.state.playing

    if (playing) {
      this.state.audio8.pause()
      document.querySelectorAll(".mainImg")[7].src = pauseImg
    } else {
      this.state.audio8.play()
      document.querySelectorAll(".mainImg")[7].src = playImg
    }
    this.setState({ playing: !playing })
  }

  musicplay9 = () => {
    document.querySelector(".mainBody").style.background = `url(${backImg9})`
    let logo = document.getElementById("logoChange")
    logo.src = imga
    logo.style.display = "block"
    let playing = this.state.playing

    if (playing) {
      this.state.audio9.pause()
      document.querySelectorAll(".mainImg")[8].src = pauseImg
    } else {
      this.state.audio9.play()
      document.querySelectorAll(".mainImg")[8].src = playImg
    }
    this.setState({ playing: !playing })
  }

  musicplay10 = () => {
    document.querySelector(".mainBody").style.background = `url(${backImg10})`
    let logo = document.getElementById("logoChange")
    logo.src = imga
    logo.style.display = "block"
    let playing = this.state.playing

    if (playing) {
      this.state.audio10.pause()
      document.querySelectorAll(".mainImg")[9].src = pauseImg
    } else {
      this.state.audio10.play()
      document.querySelectorAll(".mainImg")[9].src = playImg
    }
    this.setState({ playing: !playing })
  }

  musicplay11 = () => {
    document.querySelector(".mainBody").style.background = `url(${backImg11})`
    let logo = document.getElementById("logoChange")
    logo.src = imga
    logo.style.display = "block"
    let playing = this.state.playing

    if (playing) {
      this.state.audio11.pause()
      document.querySelectorAll(".mainImg")[10].src = pauseImg
    } else {
      this.state.audio11.play()
      document.querySelectorAll(".mainImg")[10].src = playImg
    }
    this.setState({ playing: !playing })
  }

  render() {

    return (
      <div className="mainBody">
        <h1><Typewriter
          words={['Welcome To StarLoad Music']}
          loop= {0}
          typeSpeed= {70}
          deleteSpeed= {50}
          delaySpeed= {1000}
          cursor= {true}
          cursorStyle= {"|"}
        /></h1>
        <img id='logoChange' alt='loading' style={{ display: "none" }} />
        <ol>
          <li><img className='mainImg' src={playImg} alt="loading" onClick={this.musicplay} /><span> Rock Music</span></li>
          <li><img className='mainImg' src={playImg} alt="Loading" onClick={this.musicPlay2} /><span>Barren Gates  M.I.M.E - Enslaved [NCS Release]</span></li>
          <li><img className='mainImg' src={playImg} alt="Loading" onClick={this.musicPlay3} /><span>Cartoon-Why_We_Lose_feat_Coleman</span></li>
          <li><img className='mainImg' src={playImg} alt="Loading" onClick={this.musicplay4} /><span>Clarx - H.A.Y _NCS Release</span></li>
          <li><img className='mainImg' src={playImg} alt="Loading" onClick={this.musicplay5} /><span>Dirty Palm - Oblivion (feat. Micah Martin)</span></li>
          <li><img className='mainImg' src={playImg} alt="Loading" onClick={this.musicplay6} /><span>Emdi x Coorby - Lonewolf (feat. Kristi-Leah)</span></li>
          <li><img className='mainImg' src={playImg} alt="Loading" onClick={this.musicplay7} /><span>Jo Cohen & Sex Whales - We Are</span></li>
          <li><img className='mainImg' src={playImg} alt="Loading" onClick={this.musicplay8} /><span>Kozah - Haha _NCS Release</span></li>
          <li><img className='mainImg' src={playImg} alt="Loading" onClick={this.musicplay9} /><span>Ship Wrek & Zookeepers - Ark</span></li>
          <li><img className='mainImg' src={playImg} alt="Loading" onClick={this.musicplay10} /><span>T-Mass - Ignoring My Heart</span></li>
          <li><img className='mainImg' src={playImg} alt="Loading" onClick={this.musicplay11} /><span>TULE - Fearless pt.II (feat. Chris Linton)</span></li>
        </ol>
      </div>
    )
  }
}

