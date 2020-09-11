newELO = (a, b) => {
    expectedRatio = (1 /( 1 + 10^((a-b)/400)));
    aNew = a + a * expectedRatio;
    return aNew;
};
