"use client"
import React from 'react'
import styled from 'styled-components';

  const StyledWrapper3 = styled.div`
  .card {
    width: 390px;
    height: 254px;
    border-radius: 30px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
               -15px -15px 30px #ffffff;
  }`;
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const Cards = ({head,sub}) => {
  return (
    <div>
         <StyledWrapper3>
      <div className="" />
   
                <Card  className="bg-white card shadow-lg border-0 p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                     {head}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                     {sub}
                    </p>
                    
                  </CardContent>
                </Card>
              </StyledWrapper3>

    </div>
  )
}

export default Cards