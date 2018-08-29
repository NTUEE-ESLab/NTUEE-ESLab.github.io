import React from 'react'
import { Header } from 'semantic-ui-react'
import './Intro.sass'

export default function() {
    return (<div className='intro'>
        <div>
            <Header as='h1'>嵌入式實驗<span className='rwd-mobile-hidden'>（十選二）</span></Header>
            <p className='subtitle'>國立臺灣大學 電機工程學系</p>
            <p className='content-text'>
                嵌入式實驗是一門將理論化為實作，並在實踐中解決問題的課程。
                除了了解作業系統如何與硬體配合、硬體如何跟感測器溝通外，本課程希望透過實作的方式驗證這些概念。
                而實作的過程中或許會遭遇預期以外的問題，這些問題或許來自硬體的限制或是人為的錯誤，本課程強調在實作中發現問題並解決的能力。
            </p>
        </div>
    </div>)
}
