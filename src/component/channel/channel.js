import React from 'react'
import classes from './channel.module.scss'
import { ChannelCards } from './channelCards/channelCards'
import { Scrollbars } from 'react-custom-scrollbars'

// === img ===
import channelFirst from '../../img/contain/channelCards/firstChannel.svg'
import channel2x2 from '../../img/contain/channelCards/channel2x2.svg'
import channelRBK from '../../img/contain/channelCards/channelRBK.svg'
import channelAmedia from '../../img/contain/channelCards/channelAmedia.svg'
import { Tabs } from '../UI/tabs/tabs'

export const Channel = () => {

    const arr = [
        {
            logo: channelFirst,
            name: 'Первый канал',
            description: {
                firstPlace: ['13:00', 'Новости (с субтитрами)'],
                secondPlace: ['14:00', 'Давай поженимся'],
                thirdPlace: ['15:00', 'Другие новости']
            }
        },
        {
            logo: channel2x2,
            name: '2x2',
            description: {
                firstPlace: ['13:00', 'МУЛЬТ ТВ. Сезон 4, 7 серия'],
                secondPlace: ['14:00', 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия'],
                thirdPlace: ['15:00', 'БУРДАШЕВ. Сезон 1, 20 серия']
            }
        },
        {
            logo: channelRBK,
            name: 'РБК',
            description: {
                firstPlace: ['13:00', 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС'],
                secondPlace: ['14:00', 'ДЕНЬ. Главные темы'],
                thirdPlace: ['15:00', 'Главные новости']
            }
        },
        {
            logo: channelAmedia,
            name: 'AMEDIA PREMIUM',
            description: {
                firstPlace: ['13:00', 'Клиент всегда мёртв'],
                secondPlace: ['14:00', 'Голодные игры: Сойка-пересмешница. Часть I'],
                thirdPlace: ['15:00', 'Секс в большом городе']
            }
        },
        {
            logo: channelFirst,
            name: 'Первый канал',
            description: {
                firstPlace: ['13:00', 'Новости (с субтитрами)'],
                secondPlace: ['14:00', 'Давай поженимся'],
                thirdPlace: ['15:00', 'Другие новости']
            }
        }
    ]

    return (
        <>
            <Tabs />
            <div className={classes.scrollChannel}>
                <Scrollbars
                    style={{width: '1196px'}}
                    autoHide={false}
                    autoHeight={true}
                    autoHeightMin={696}
                    autoHeightMax={696}
                    renderThumbVertical={props => <div {...props} className={classes.thumbVertical} style={{width: '4px', height: '500px'}} />}
                    renderTrackVertical={props => <div {...props} className={classes.trackVertical} style={{width: '4px', padding: '2px', height: '692px'}}/>}
                    thumbSize={500}
                >
                    <div className={classes.channel}>
                        { arr.map((channel, index) => {
                            return (
                                <ChannelCards
                                    logo={channel.logo}
                                    description={channel.description}
                                    name={channel.name}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </Scrollbars>   
            </div>

        </>
    )
}