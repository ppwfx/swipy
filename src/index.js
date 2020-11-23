import {render} from 'react-dom'
import React, {useState} from 'react'
import {animated, interpolate, useSprings} from 'react-spring'
import {useDrag} from 'react-use-gesture'
import './index.css'
import 'animate.css'

import {createState as createHookState, useState as useHookState} from '@hookstate/core';


const cards0 = [
    {
        image: 'https://images.unsplash.com/photo-1567021185300-23afa08f68ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3437&q=80',
        cigarettes: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1552633499-fc1c7661cba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
        cigarettes: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1528050971731-6536559d5b62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        cigarettes: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1528671839653-1f8ab2e4bda1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        cigarettes: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1500370131209-02b46b6331a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        cigarettes: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1584825093714-f5d917af9317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60}',
        cigarettes: true,
    },


    {
        image: 'https://images.unsplash.com/photo-1586865768751-8d9bc2a4e3fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        water: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1560008412-d14635ad676c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        water: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1584444262846-e2716db1294b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        water: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1566985415436-002cccb73558?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        water: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1536972990510-2ecb9d60ac4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        water: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1579643231315-c827436682b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        water: true,
    },



    {
        image: 'https://images.unsplash.com/photo-1583500178450-e59e4309b57d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3625&q=80',
        sport: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4350&q=80',
        sport: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1576921876279-4e1b7304015d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
        sport: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        sport: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        sport: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1583454122781-8cf8f5af9d2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        sport: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1598136490941-30d885318abd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        sport: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1598971448040-cfd8e9267d9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        sport: true,
    },

    {
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        vegetables: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        vegetables: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        vegetables: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        vegetables: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        vegetables: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1542814880-7e62cf14b7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        vegetables: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1599020792689-9fde458e7e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        vegetables: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1542814784-133212a2e378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        vegetables: true,
    },

    {
        image: 'https://www.spineuniverse.com/sites/default/files/imagecache/gallery-large/wysiwyg_imageupload/3998/2018/02/01/13328067_ML_edited.jpg',
        badposture: true,
    },
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40nga_93573%2Fhow-to-prevent-back-pain-in-the-office-6087ed442c3f&psig=AOvVaw3JsAAnclvADlX7QQUeRNMK&ust=1605455636114000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCv27iygu0CFQAAAAAdAAAAABAL',
        badposture: true,
    },
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fleadingedgephysicaltherapy.com.au%2Fhow-to-avoid-3-common-mistakes-when-setting-up-your-workstation-at-home%2F&psig=AOvVaw3JsAAnclvADlX7QQUeRNMK&ust=1605455636114000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCv27iygu0CFQAAAAAdAAAAABAQ',
        badposture: true,
    },

    {
        image: 'https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Gennadiy,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1501678918/iffgd2io6jmiayhbjmwn.jpg',
        fastfood: true,
    },
    {
        image: 'https://cdn.images.express.co.uk/img/dynamic/11/750x445/774211.jpg',
        fastfood: true,
    },
    {
        image: 'https://www.thesun.co.uk/wp-content/uploads/2019/07/NINTCHDBPICT000381253954.jpg?w=1240',
        fastfood: true,
    },
    {
        image: 'https://media.gettyimages.com/videos/boy-eating-french-fries-video-id693874852?s=640x640',
        fastfood: true,
    },
    {
        image: 'https://c8.alamy.com/comp/J16X2H/fat-man-eating-fast-food-slice-pizza-breakfast-for-overweight-person-J16X2H.jpg',
        fastfood: true,
    },
    {
        image: 'https://static2.bigstockphoto.com/2/8/1/large1500/182195557.jpg',
        fastfood: true,
    },
    {
        image: 'https://as1.ftcdn.net/jpg/01/76/10/12/500_F_176101269_djPnag0x3lNmQMNj580sCsO5dsG0wAOP.jpg',
        fastfood: true,
    },


]

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20})
const from = i => ({x: 0, rot: 0, scale: 1.5, y: -1000})
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const dirUp = -1
const dirDown = 1

const pointState = createHookState(0);
const feedbackState = createHookState({
    positive: false,
    correct: false,
    show: false,
    time: Date.now(),
});
const cardsState = createHookState(cards0);

reset()

function reset() {
    console.log("a")

    cardsState.set(shuffle(cards0))
    pointState.set(0)
}

function App() {
    return <>
        <div className="swipe-feedback-container"><SwipeFeedback/></div>
        <Counter/>
        <Deck/>
    </>
}

function SwipeFeedback() {
    const feedback = useHookState(feedbackState).get();

    if (!feedback.show) {
        return null;
    }

    const animation = feedback.correct ? "animate__tada " : "animate__flash ";
    const text = feedback.positive ? "YES!" : "NO!";
    const variation = feedback.correct ? (feedback.positive ? "swipe-feedback--green " : "swipe-feedback--red ") : "swipe-feedback--grey ";
    const className = "swipe-feedback " + variation + "animate__animated " + animation

    return <div key={feedback.time} className={className}>{text}</div>;
}

function Counter() {
    const points = useHookState(pointState);

    return <h1>{points.get()}</h1>
}

function Deck() {
    const cards = useHookState(cardsState)
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, set] = useSprings(cards.get().length, i => ({...to(i), from: from(i)})) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({args: [index], vxvy: [vx, vy], last, down, movement: [mx, my], distance, direction: [xDir], swipe: [xSwipe, ySwipe], velocity}) => {
        const trigger = Math.abs(vy) > 0.01 // If you flick hard enough it should trigger the card to fly out
        const dir = vy < 0 ? dirUp : dirDown // Direction should either point left or right

        // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        if (!down && trigger) {
            gone.add(index)
            let isPositive = false
            let isCorrect = false
            let card = cards.get()[index]

            if (card.water === true || card.sport === true || card.vegetables === true) {
                isPositive = true
            }

            if ((isPositive && dir === dirDown) || (!isPositive && dir === dirUp)) {
                pointState.set(pointState.get() + 1)
                isCorrect = true
            } else {
                pointState.set(pointState.get() - 1)
            }

            feedbackState.set({
                positive: isPositive,
                correct: isCorrect,
                show: true,
                time: Date.now(),
            });
            // setTimeout(function () {
            //     feedbackState.set({
            //         show: false,
            //     });
            // }, 300)
            // var audio = new Audio('./yes_01.mp3');
            // audio.play();
        }

        set(i => {
            if (index !== i) return // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index)
            const y = isGone ? (200 + window.innerHeight) * dir : down ? my : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
            const rot = my / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
            const scale = down ? 1.1 : 1 // Active cards lift up a bit
            return {y, rot, scale, delay: undefined, config: {friction: 20, tension: down ? 800 : isGone ? 200 : 500}}
        })

        if (!down && gone.size === cards.get().length) {
            setTimeout(() => {
                gone.clear() || set(i => to(i))
                reset(false)
            }, 600)
        }
    })
    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
    return props.map(({x, y, rot, scale}, i) => (
        <animated.div className="deck" key={i} style={{transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)}}>
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <animated.div className="card" {...bind(i)} style={{backgroundImage: `url(${cards.get()[i].image})`}}/>
        </animated.div>
    ))
}

render(<App/>, document.getElementById('root'))
