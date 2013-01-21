package demo.modernweb.domain.thirdparty;

/**
 * @johnwilander
 */
public class Price {
    private final int amount;
    private final Currency currency;

    public Price(int amount, Currency currency) {
        this.amount = amount;
        this.currency = currency;
    }

    /**
     * @param otherPrice The price to add to this one
     * @return a new Price object with the sum of the two prices
     * @throws IllegalArgumentException if currencies do not match
     */
    public Price add(Price otherPrice) {
        if (currency != otherPrice.currency) {
            throw new IllegalArgumentException("Currencies don't match, cannot add " + currency + " with " + otherPrice.currency);
        } else {
            return new Price(amount + otherPrice.amount, currency);
        }
    }

    public enum Currency {
        SEK_ORE, EURO_CENTS
    }

    public int getAmount() {
        return amount;
    }

    public Currency getCurrency() {
        return currency;
    }
}
