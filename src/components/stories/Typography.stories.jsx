import React from 'react';
import H1 from '../Typography/H1';
import H2 from '../Typography/H2';
import H3 from '../Typography/H3';
import H4 from '../Typography/H4';
import H5 from '../Typography/H5';
import H6 from '../Typography/H6';
import Paragraph from '../Typography/Paragraph';
import Label from '../Typography/Label';
import Caption from '../Typography/Caption';
import HelperText from '../Typography/HelperText';

export default {
  title: 'Typography',
};

export const Headings = () => (
  <div className="space-y-2">
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
    <H6>Heading 6</H6>
  </div>
);

export const BodyText = () => (
  <div className="space-y-3">
    <Paragraph>This is a paragraph demonstrating regular body text.</Paragraph>
    <Label htmlFor="name">This is a label</Label>
    <Caption>This is a caption</Caption>
    <HelperText>This is helper text to guide the user.</HelperText>
  </div>
);
