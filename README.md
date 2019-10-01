# Chess

A showcase prototype of a "extendable" chess implementation in Angular

Current features:
* board generation, set by default at 8x8
    * structure setup is a 2D array
* pathing implementation
    * checks for X, Y, XY, Knight movement patterns
    * blocked path detection, coupled with a jump parameter
* class-based chess pieces implementation
    * general movement patterns are checked on the Piece class
    * each piece can implement specific restrictions - i.e. Pawns can't move backward

Planned features, maybe:
* check / checkmate detection
* reverse logic for player 1 events
* match instance + players implementation through a basic db platform, maybe Firebase