import React, {useEffect, useState} from 'react';

import styled, { keyframes } from 'styled-components'

import { useBlockNumber, useEthers } from '@usedapp/core'

import { getEtherscanLink } from '../utils';

import { ExternalLink } from './ExternalLink';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  animation: ${rotate360} 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  transform: translateZ(0);

  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 2px solid lime;
  background: transparent;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;

  left: -3px;
  top: -3px;
`

const StyledPollingDot = styled.div`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  margin-right: 5px;
  border-radius: 50%;
  position: relative;
  background-color: lime;
`

const BlockNumberContainer = styled.div`
    font-family: monospace;
    font-size: 12px;
    position: fixed;
    top: calc(100% - 10px);
    left: calc(100% - 10px);
    transform: translate(-100%, -100%);
    display: flex;
    align-items: center;
    :hover{
        cursor: pointer
        span {
            opacity: 1 !important
        }
    }
`

const BlockNumberIndicator = () => {
    const blockNumber = useBlockNumber()
    const { chainId } = useEthers()
    const [showSpinner, setShowSpinner] = useState(false)
    useEffect(() => {
        setShowSpinner(true);
        const timer1 = setTimeout(() => setShowSpinner(false), 1000)

        // this will clear Timeout when component unmount like in willComponentUnmount
        return () => {
            setShowSpinner(false)
            clearTimeout(timer1)
        }
    }, [blockNumber])
    return (
        <ExternalLink href={chainId && blockNumber ? getEtherscanLink(chainId, blockNumber.toString(), 'block') : ''}>
            <BlockNumberContainer>
                <StyledPollingDot>{showSpinner && <Spinner/>}</StyledPollingDot><span style={{opacity: !showSpinner ? '0.4' : '0.6'}}>{blockNumber}</span>
            </BlockNumberContainer>
        </ExternalLink>
    )
}

export default BlockNumberIndicator