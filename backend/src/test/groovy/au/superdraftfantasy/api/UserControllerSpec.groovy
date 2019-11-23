package au.superdraftfantasy.api

import spock.lang.Specification

class UserControllerSpec extends Specification {
    def "should equal 5"(){
        given:
        def number = 5;

        expect:
        number == 5;
    }
}
