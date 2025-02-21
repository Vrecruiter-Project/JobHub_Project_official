import React from 'react';
import PageComponent from '../PageComponent';
import { Box, Grid2, Typography, Container } from '@mui/material';

export default function Termsconditions() {

  return (
    <PageComponent>
   
    
        <Container >
          <Box sx={{ py: 5 }}>
            {/* Header */}
            <Typography variant="h2" sx={{
              mb: 3,
              fontSize: { xs: '25px', sm: '35px', md: '45px', lg: '55px' }
            }}>
              Terms and Conditions
            </Typography>

            {/* Content */}
            <Grid2 container spacing={2}>
              <Grid2 item xs={12}>
                <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.8 }}>
                  This Privacy Policy explains how we collect, use, disclose, and protect your personal information. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, amet illum! Cum suscipit corporis labore consectetur libero obcaecati quibusdam officiis, amet dolore minima id expedita dignissimos fuga. Provident, eaque soluta.

                  Expedita, voluptatum. Adipisci dolorem similique deleniti ex fuga, repudiandae numquam in eaque quo eius beatae natus quasi, perferendis maiores omnis esse? Saepe aspernatur magni commodi delectus doloremque provident quibusdam iusto.

                  Cumque quas repellat beatae commodi amet sapiente explicabo rem sint, veniam repudiandae aut quasi, nisi mollitia sed aspernatur, nemo dicta porro quae eos ex blanditiis delectus molestiae dolorem cum. Ipsa.

                  Accusamus molestiae adipisci officiis nisi doloremque iure possimus ipsa animi praesentium facere itaque velit rem impedit, sapiente qui aliquid tenetur, quo alias tempora quaerat ipsam? Fuga officia minus eius culpa!


                </Typography>
              </Grid2>
              <Grid2 item xs={12}>
                <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.8 }}>
                  This Privacy Policy explains how we collect, use, disclose, and protect your personal information. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, amet illum! Cum suscipit corporis labore consectetur libero obcaecati quibusdam officiis, amet dolore minima id expedita dignissimos fuga. Provident, eaque soluta.

                  Expedita, voluptatum. Adipisci dolorem similique deleniti ex fuga, repudiandae numquam in eaque quo eius beatae natus quasi, perferendis maiores omnis esse? Saepe aspernatur magni commodi delectus doloremque provident quibusdam iusto.

                  Cumque quas repellat beatae commodi amet sapiente explicabo rem sint, veniam repudiandae aut quasi, nisi mollitia sed aspernatur, nemo dicta porro quae eos ex blanditiis delectus molestiae dolorem cum. Ipsa.

                  Accusamus molestiae adipisci officiis nisi doloremque iure possimus ipsa animi praesentium facere itaque velit rem impedit, sapiente qui aliquid tenetur, quo alias tempora quaerat ipsam? Fuga officia minus eius culpa!


                </Typography>
              </Grid2>
            </Grid2>
          </Box>
        </Container>
    
    </PageComponent>
  );
}
