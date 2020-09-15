newELO = (newRating, oldRating) => {
    expectedRatio = (1 /( 1 + 10^((newRating-oldRating)/400)));
    aNew = newRating + newRating * expectedRatio;
    return aNew;
};
